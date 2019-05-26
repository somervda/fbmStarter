import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { convertSnaps } from "./db-utils";
import { first, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private afs: AngularFirestore) {}

  findUserByUid(uid: string): Observable<User> {
    return this.afs
      .collection("users", ref => ref.where("uid", "==", uid))
      .snapshotChanges()
      .pipe(
        map(snaps => {
          const users = convertSnaps<User>(snaps);
          return users.length == 1 ? users[0] : undefined;
        }),
        first()
      );
  }
}
