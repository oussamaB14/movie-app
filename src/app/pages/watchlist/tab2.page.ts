import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class WatchlistPage implements OnInit {
  userId: string = '';
  favoriteMovies: Movie[] = [];
  isLoading = true;
  constructor(
    private authService: AuthService,
    private movieService: MovieService
  ) {}
  ngOnInit() {
    // Get current user and fetch favorite movies
    this.authService.getCurrentUser().subscribe((user) => {
      if (user && user.uid) {
        this.userId = user.uid;

        // Fetch favorite movie IDs
        this.movieService.getUserFavorites(this.userId).subscribe((favoriteIds) => {
          this.fetchFavoriteMovies(favoriteIds);
        });
      } else {
        console.error('No user is logged in.');
        this.isLoading = false;
      }
    });
  }
  fetchFavoriteMovies(favoriteIds: number[]) {
    if (favoriteIds.length === 0) {
      this.favoriteMovies = [];
      this.isLoading = false;
      return;
    }

    this.favoriteMovies = []; // Clear current list
    favoriteIds.forEach((id) => {
      this.movieService.getMovieDetails(id.toString()).subscribe({
        next: (movie) => {
          this.favoriteMovies.push(movie);
        },
        error: (err) => {
          console.error(`Error fetching movie details for ID ${id}:`, err);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    });
  }

}
