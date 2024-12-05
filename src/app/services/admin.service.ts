import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private usersCollection = this.firestore.collection<User>('users');
  //private moviesCollection = this.firestore.collection<Movie>('movies');
  constructor(
    private firestore: AngularFirestore,
    private movieService: MovieService
  ) {}
  // Fetch all users
  getUsers(): Observable<User[]> {
    return this.usersCollection.valueChanges({ idField: 'uid' }); // Include Firestore document ID as 'uid'
  }
  // Enable/Disable user
  async toggleUserStatus(userId: string, isDisabled: boolean): Promise<void> {
    const userDoc = this.firestore.doc(`users/${userId}`);
    await userDoc.update({ isDisabled });
  }
  // Add movie to user's favorites list
  async addMovieToUserFavorites(
    userId: string,
    movieId: string
  ): Promise<void> {
    try {
      await this.movieService.addToFavorites(userId, movieId);
      console.log(
        `Movie ${movieId} added to user ${userId}'s favorites successfully!`
      );
    } catch (error) {
      console.error(
        `Failed to add movie ${movieId} to user ${userId}'s favorites:`,
        error
      );
    }
  }

}
