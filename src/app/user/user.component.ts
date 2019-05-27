import { AuthService } from "./../services/auth.service";
import { KeyValuePair } from "../models/key-value-pair.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../models/user.model";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  user: User;
  kvps: KeyValuePair[];
  updatableProfile: boolean = false;

  constructor(private route: ActivatedRoute, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.user = this.route.snapshot.data["user"];
    const isAdmin = this.user.isAdmin ? "Yes" : "No";
    const isActivated = this.user.isActivated ? "Yes" : "No";

    // The user page is read only for non-administrators
    // or where the uid = the logged on user UID)
    // if the user is and administrator and looking at other peoples profiles then updates
    // are available
    // Note: firestore rules will still control updates on the backend
    if (this.user.uid != this.afAuth.auth.currentUser.uid && this.user.isAdmin)
      this.updatableProfile = true;

    this.kvps = [
      { key: "Display Name", value: this.user.displayName },
      { key: "User Id", value: this.user.uid },
      { key: "eMail", value: this.user.email },
      {
        key: "Photo URL",
        value: this.user.photoURL
      }
    ];

    if (!this.updatableProfile) {
      this.kvps.push({ key: "Is Administrator?", value: isAdmin });
      this.kvps.push({ key: "Is Activated?", value: isActivated });
    }
    // for admins updating other users profile isAdmin and isActivated displayed
    // as updatable controls in the HTML template
  }
}
