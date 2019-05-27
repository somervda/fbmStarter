import { KeyValuePair } from "../models/key-value-pair.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../models/user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  user: User;
  kvps: KeyValuePair[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.route.snapshot.data["user"];
    const isAdmin = this.user.isAdmin ? "Yes" : "No";
    const isActivated = this.user.isActivated ? "Yes" : "No";
    this.kvps = [
      { key: "Display Name", value: this.user.displayName },
      { key: "User Id", value: this.user.uid },
      { key: "eMail", value: this.user.email },
      { key: "Is Administrator?", value: isAdmin },
      { key: "Is Activated?", value: isActivated },
      {
        key: "Photo URL",
        value: this.user.photoURL
      }
    ];
  }
}
