import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { constants } from '../utils/constants';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient,
    private firestore: AngularFirestore,
    private authService: AuthService) { }
    getPopularMovies(): Observable<any> {
      return this.http.get<Movie[]>(`${constants.TMDB_API_URL}/movie/popular?api_key=${constants.TMDB_API_KEY}`);
    }
    getMovieDetails(movieId: string): Observable<Movie> {
      return this.http.get<Movie>(`${constants.TMDB_API_URL}/movie/${movieId}?api_key=${constants.TMDB_API_KEY}`);
    }
}
