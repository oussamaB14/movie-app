import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  userFavorites: number[] = [];
  movieId: string | null = null;
  movieDetails: Movie = {} as Movie;
  userId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Get the movie ID from the route
    this.movieId = this.route.snapshot.paramMap.get('id');

    if (this.movieId) {
      // Fetch movie details
      this.movieService.getMovieDetails(this.movieId).subscribe({
        next: (response) => {
          this.movieDetails = response;
        },
        error: (error) => {
          console.error('Error fetching movie details:', error);
        },
      });
    }

    // Fetch the current user and their favorites once
    this.authService.getCurrentUser().subscribe((user) => {
      if (user && user.uid) {
        this.userId = user.uid; // Save userId
        this.movieService.getUserFavorites(this.userId).subscribe((favorites) => {
          this.userFavorites = favorites || [];
        });
      }
    });
  }

  toggleFavorite(movieId: number) {
    if (!this.userId) {
      console.error('User is not logged in.');
      return;
    }

    const isFavorite = this.userFavorites.includes(movieId);

    this.movieService.toggleFavorite(this.userId, movieId, isFavorite).then(() => {
      if (isFavorite) {
        this.userFavorites = this.userFavorites.filter((id) => id !== movieId);
      } else {
        this.userFavorites.push(movieId);
      }
    });
  }

  isFavorite(movieId: number): boolean {
    return this.userFavorites.includes(movieId);
  }
}
