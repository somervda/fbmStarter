import { KVP } from "./../models/kvp.model";
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
  kvps: KVP[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.route.snapshot.data["user"];
    this.kvps = [
      { key: "Display Name", value: this.user.displayName },
      { key: "User Id", value: this.user.uid },
      { key: "eMail", value: this.user.email }
    ];

    console.log("user kvps:", this.kvps);

    console.log("user user:", this.user);
  }
}
