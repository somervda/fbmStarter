import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class UserGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Check user is signed in
    if (this.auth.currentUser) return true;
    this.router.navigateByUrl("notfound");
    return false;
  }
}
