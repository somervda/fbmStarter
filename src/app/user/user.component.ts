import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { HelperService } from "../services/helper.service";
import { AuthService } from "./../services/auth.service";
import { UserService } from "./../services/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  user$: Observable<User>;
  uid: string;
  // If only the photo can be updated unless the user has fullAccess
  fullAccess: boolean = false;

  showSpinner = false;
  fileUploadMsg = "";

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private auth: AuthService,
    private storage: AngularFireStorage,
    private helper: HelperService
  ) {}

  ngOnInit() {
    this.uid = this.route.snapshot.paramMap.get("uid");
    if (
      this.auth.currentUser.isAdmin &&
      this.auth.currentUser.uid != this.uid
    ) {
      this.fullAccess = true;
    }
    if (
      !this.auth.currentUser.isAdmin &&
      this.auth.currentUser.uid != this.uid
    ) {
      this.helper.redirect("/notAuthorized");
    }

    this.user$ = this.userService.findUserByUid(this.uid);
  }

  updateField(name: string, value: any) {
    console.log("updateField", name, value);
    this.userService.dbFieldUpdate(this.uid, name, value);
  }

  getStorageUrl(filename: string): Observable<any> {
    // console.log("getStorageUrl", filename);
    return this.storage
      .ref(`userphotos/${this.uid}/${filename}`)
      .getDownloadURL();
  }

  onUploadFile(event) {
    console.log("onUploadFile", event);
    const fileToUpload = event.target.files[0];
    console.log("fileToUpload", fileToUpload.size);
    if (fileToUpload.size > 150000) {
      this.fileUploadMsg =
        " File is too large to upload. Must be less than 150KB";
    } else {
      this.showSpinner = true;
      this.fileUploadMsg = "";
      const task = this.storage
        .upload(`userphotos/${this.uid}/${fileToUpload.name}`, fileToUpload)
        .then((t) => {
          this.getStorageUrl(fileToUpload.name)
            .toPromise()
            .then((url) =>
              this.userService.dbFieldUpdate(this.uid, "photoURL", url)
            );
          this.showSpinner = false;
        })
        .catch((e) => (this.showSpinner = false));
    }
  }

  getDate(inDate: any): string {
    let sDate = "";
    if (inDate && inDate != null) {
      sDate = inDate.toDate();
    }

    return sDate;
  }
}
