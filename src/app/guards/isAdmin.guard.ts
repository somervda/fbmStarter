import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class isAdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.currentUser && this.auth.currentUser.isAdmin) return true;
    this.router.navigateByUrl("notfound");
    return false;
  }
}
