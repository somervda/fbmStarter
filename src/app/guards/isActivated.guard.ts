import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";
import { take, tap, map } from "rxjs/operators";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class IsActivatedGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    // See https://github.com/angular/angularfire2/issues/282
    // The authguard returns an observable based on the
    // auth service user$ observable first emission. This solves
    // the problem of reentering the application after the user
    // has authenticated but before the auth information has been retrieved (again)
    return this.auth.user$.pipe(
      take(1),
      tap((u: User) => {
        // If the user does not have required access then redirect
        // console.log("u tap:", u);
        if (!u) this.router.navigateByUrl("login");
        if (!u.isActivated) this.router.navigateByUrl("notAuthorized");
      }),
      map((u: User) => !!u)
    );
  }
}
