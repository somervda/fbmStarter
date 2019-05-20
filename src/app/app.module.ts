import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AngularFireModule } from "@angular/fire";

import { environment } from "../environments/environment";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
// import { AngularFireStorageModule } from "@angular/fire/storage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  // MatDatepickerModule,
  // MatDialogModule,
  // MatInputModule,
  MatListModule,
  // MatPaginatorModule,
  // MatProgressSpinnerModule,
  // MatSelectModule,
  MatSidenavModule,
  // MatSortModule,
  // MatTableModule,
  MatToolbarModule,
  MatSnackBarModule
} from "@angular/material";
// import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
// import { MatTabsModule } from "@angular/material/tabs";
// import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import "hammerjs";

import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    // MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    // MatInputModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatProgressSpinnerModule,
    // MatDialogModule,
    AppRoutingModule,
    // MatSelectModule,
    // MatDatepickerModule,
    // MatMomentDateModule,
    NgbCarouselModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
