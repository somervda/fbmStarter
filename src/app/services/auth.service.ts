//import { AuthService } from "./auth.service";
import { auth } from "firebase/app";
// see https://fireship.io/lessons/angularfire-google-oauth/ for
// a detailed walk through of this authentication approach that is
// used to extend the firebase authentication information with
// custom user data (i.e. roles, app specific attributes)

import { Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { User } from "../models/user.model"; // optional

import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<User>;
  loggedIn$: Observable<boolean>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    console.log("auth service constructor");
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );

    this.loggedIn$ = this.afAuth.authState.pipe(map(user => !!user));
  }

  public updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    // Create a generic photoURL if auth. photoURL is null
    if (!data.photoURL) {
      data.photoURL = "https://ui-avatars.com/api/?name=" + data.displayName;
    }

    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    console.log("User Signed Out");
    this.router.navigate(["/"]);
  }

  persistSeason() {
    // See https://firebase.google.com/docs/auth/web/auth-state-persistence
    // This function will return immediately even though promise may still be
    // being actioned. See documentation , future authentication will wait for this function
    // to complete and persistance will be set appropriately

    this.afAuth.auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function() {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        console.log("persistSeason worked");
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log("persistSeason error ", error);
      });
  }
}
