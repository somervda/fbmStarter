import { AuditLogService } from "./audit-log.service";
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
  constructor(private afs: AngularFirestore, private als: AuditLogService) {}

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

  dbFieldUpdate(docId: string, fieldName: string, newValue: any) {
    if (docId && fieldName) {
      const updateObject = {};
      // console.log("dbFieldUpdate", docId, fieldName, newValue);
      updateObject[fieldName] = newValue;
      this.afs
        .doc("/users/" + docId) // Update to firestore collection
        .update(updateObject)
        .then(data => {
          // console.log(fieldName + " updated");
          this.als.logDataChange(docId, "users", fieldName, newValue);
        })
        .catch(error =>
          console.error(fieldName + " user update error ", error)
        );
    }
  }
}
