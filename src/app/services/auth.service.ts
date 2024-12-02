import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this['user$'] = this.auth.authState as Observable<User | null>;
  }
  async register(
    name: string,
    email: string,
    password: string,
    age: number,
    photoURL: string
  ): Promise<void> {
    const userCredential = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const uid = userCredential.user?.uid;

    if (uid) {
      const user: User = {
        uid,
        name,
        email,
        age,
        photoURL,
        favorites: [],
        isAdmin: false, // Default value
      };

      await this.firestore.collection('users').doc(uid).set(user);
    }
  }
  async login(email: string, password: string): Promise<void> {
    await this.auth.signInWithEmailAndPassword(email, password);
  }
  async logout(): Promise<void> {
    await this.auth.signOut();
  }
  getCurrentUser(): Observable<User | null> {
    return this.auth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.firestore
            .collection('users')
            .doc<User>(user.uid)
            .valueChanges()
            .pipe(map((userData) => userData ?? null));
        } else {
          return from([null]);
        }
      })
    );
  }
}
