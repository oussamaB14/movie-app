import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
addToWatchlist(arg0: Movie) {
throw new Error('Method not implemented.');
}
bookmarkMovie() {
throw new Error('Method not implemented.');
}
  movieId: string | null = null;
  movieDetails: Movie = {} as Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
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
  }
}
