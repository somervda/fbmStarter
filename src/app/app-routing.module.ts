import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./user/user.component";
import { UserResolver } from "./services/user-resolver";
import { AdministrationComponent } from "./administration/administration.component";
import { isAdminGuard } from "./guards/isAdmin.guard";
import { isActivatedGuard } from "./guards/isActivated.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "login", component: LoginComponent },
  {
    path: "administration",
    component: AdministrationComponent,
    canActivate: [isAdminGuard]
  },
  { path: "users", component: UsersComponent, canActivate: [isAdminGuard] },
  {
    path: "user/:uid",
    component: UserComponent,
    resolve: { user: UserResolver },
    canActivate: [isActivatedGuard]
  },
  { path: "notfound", component: NotfoundComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
