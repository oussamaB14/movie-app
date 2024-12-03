import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { constants } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}
  getPopularMovies(): Observable<any> {
    return this.http.get<Movie[]>(
      `${constants.TMDB_API_URL}/movie/popular?api_key=${constants.TMDB_API_KEY}`
    );
  }
  getMovieDetails(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(
      `${constants.TMDB_API_URL}/movie/${movieId}?api_key=${constants.TMDB_API_KEY}`
    );
  }
  // addToFavorites(userId: string, movieId: string) {
  //   return this.firestore
  //     .collection('users')
  //     .doc(userId)
  //     .update({
  //       favorites: FieldValue.arrayUnion(movieId), // Add movieId to the favorites.concat(movieId),
  //     });
  // }
  

  // removeFromFavorites(userId: string, movieId: string) {
  //   return this.firestore
  //     .collection('users')
  //     .doc(userId)
  //     .update({
  //       favorites: FieldValue.arrayRemove(movieId),
  //     });
  // }
//   async getMatchingUsers(userId: string): Promise<any[]> {
//   const currentUser = await this.firestore.collection('users').doc(userId).get();
//   const currentUserFavorites = currentUser?.data().favorites || [];

//   const allUsers = await this.firestore.collection('users').get().toPromise();
//   const matchingUsers: any[] | PromiseLike<any[]> = [];

//   allUsers.forEach(userDoc => {
//     const userData = userDoc.data();
//     if (userData.id !== userId) {
//       const matchRate = this.calculateMatch(currentUserFavorites, userData.favorites || []);
//       if (matchRate > 75) {
//         matchingUsers.push({ ...userData, matchRate });
//       }
//     }
//   });

//   return matchingUsers;
// }

calculateMatch(userFavorites: string[], otherUserFavorites: string[]): number {
  const intersection = userFavorites.filter(movie => otherUserFavorites.includes(movie));
  const union = new Set([...userFavorites, ...otherUserFavorites]);
  return (intersection.length / union.size) * 100;
}

}
