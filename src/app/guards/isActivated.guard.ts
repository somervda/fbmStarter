import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class isActivatedGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Check user is signed in and activated
    if (this.auth.currentUser && this.auth.currentUser.isActivated) return true;
    this.router.navigateByUrl("notfound");
    return false;
  }
}
