// see https://fireship.io/lessons/angularfire-google-oauth/ for
// a detailed walk through of this authentication approach that is
// used to extend the firebase authentication information with
// custom user data (i.e. roles, app specific attributes)

import { Injectable } from '@angular/core';


import { Router } from '@angular/router';
import { User } from '../models/user.model'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router
  ) { 


    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          return this.afs.doc<User>("users/${user.uid}").valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    console.log("User Signed Out");
    this.router.navigate(['/']);
  }
}
