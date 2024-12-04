import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root',
})
export class MatchingService {
  constructor(private firestore: AngularFirestore, private authService: AuthService) {}

  async getMatchingUsers(): Promise<any[]> {
    try {
      const currentUser = await this.authService.getCurrentUser().toPromise();
      if (!currentUser || !currentUser.uid) {
        console.error('No user is logged in.');
        throw new Error('No user is logged in.');
      }
      
      console.log('Current User:', currentUser);

      const currentUserDoc = await this.firestore.collection('users').doc(currentUser.uid).ref.get();
      const currentUserData = currentUserDoc.data() as User;
      if (!currentUserData) {
        console.error('Current user data not found in Firestore.');
        throw new Error('Current user data not found.');
      }

      console.log('Current User Data:', currentUserData);

      const currentUserFavorites: number[] = currentUserData.favorites || [];
      console.log('Current User Favorites:', currentUserFavorites);

      const allUsersSnapshot = await this.firestore.collection('users').ref.get();
      console.log('Fetched all users from Firestore.');

      const matchingUsers: any[] = [];

      allUsersSnapshot.forEach((userDoc) => {
        const userData = userDoc.data() as User;
        console.log('Processing User:', userData);

        if (userData.uid !== currentUser.uid) {
          const otherFavorites = userData.favorites || [];
          console.log(`User ${userData.uid} Favorites:`, otherFavorites);

          const matchRate = this.calculateMatchRate(currentUserFavorites, otherFavorites);
          console.log(`Match Rate with User ${userData.uid}: ${matchRate}%`);

          if (matchRate > 75) {
            matchingUsers.push({
              id: userData.uid,
              favorites: otherFavorites,
              matchRate,
            });
          }
        }
      });

      console.log('Matching Users:', matchingUsers);
      return matchingUsers;
    } catch (error) {
      console.error('Error in getMatchingUsers:', error);
      throw error;
    }
  }

  private calculateMatchRate(userFavorites: number[], otherUserFavorites: number[]): number {
    const intersection = userFavorites.filter((movie) => otherUserFavorites.includes(movie));
    const union = new Set([...userFavorites, ...otherUserFavorites]);
    console.log('Intersection:', intersection);
    console.log('Union:', Array.from(union));
    return (intersection.length / union.size) * 100;
  }
}
