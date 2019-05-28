import { AuditLog } from "./../models/auditLog.model";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuditLogService {
  auditLog: AuditLog = <AuditLog>{};

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {}

  logDataChange(
    docId: string,
    collection: string,
    fieldName: string,
    newValue: string
  ) {
    // Only do logging based on the environment setting
    if (environment.auditLog) {
      this.auditLog.collection = collection;
      this.auditLog.docId = docId;
      this.auditLog.fieldName = fieldName;
      this.auditLog.newValue = newValue;
      this.auditLog.dateCreated = new Date();
      this.auditLog.uid = this.afAuth.auth.currentUser.uid;
      this.auditLog.type = "Data";
      console.log("this.auditLog", this.auditLog);
      this.afs
        .collection("log")
        .add(this.auditLog)
        .then(docRef => console.log("Audit Written", docRef))
        .catch(error =>
          console.error(
            "Audit Log Write Error: ",
            error,
            " auditLogEntry: ",
            this.auditLog
          )
        );
    }
  }

  logAuthentication(logIn: boolean) {
    // Only do logging based on the environment setting
    if (environment.auditLog) {
      this.auditLog.collection = "";
      this.auditLog.docId = "";
      this.auditLog.fieldName = "";
      this.auditLog.newValue = "";
      this.auditLog.dateCreated = new Date();
      this.auditLog.uid = this.afAuth.auth.currentUser.uid;
      if (logIn) this.auditLog.type = "LogIn";
      else this.auditLog.type = "LogOut";
      console.log("this.auditLog", this.auditLog);
      this.afs
        .collection("log")
        .add(this.auditLog)
        .then(docRef => console.log("Audit Written", docRef))
        .catch(error =>
          console.error(
            "Audit Log Write Error: ",
            error,
            " auditLogEntry: ",
            this.auditLog
          )
        );
    }
  }
}
