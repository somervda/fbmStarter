import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";

import { environment } from "../environments/environment";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
// import { AngularFireStorageModule } from "@angular/fire/storage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  MatListModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatChipsModule,
  MatSortModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatDividerModule
  // MatDatepickerModule,
  // MatDialogModule,
  // MatInputModule,
  // MatSelectModule,
  // MatGridListModule
} from "@angular/material";

import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import "hammerjs";

import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AdministrationComponent } from "./administration/administration.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent,
    LoginComponent,
    AdministrationComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatSnackBarModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    // MatMenuModule,
    // MatDividerModule,
    // MatTabsModule,
    // MatInputModule,
    // MatTableModule,
    // MatDialogModule,
    // MatSelectModule,
    // MatDatepickerModule,
    // MatMomentDateModule,
    AppRoutingModule,
    NgbCarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    // Allow offline operations - useful when used in combination with PWA functionality
    AngularFirestoreModule.enablePersistence(),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
