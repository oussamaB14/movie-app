import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((response) => {
      console.log(response);
      this.movies = response.results;
    });
  }
}
