import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { SwUpdate } from "@angular/service-worker";
import { MatSnackBar } from "@angular/material";
import { ConnectionService } from "ng-connection-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "fbmStarter";
  isConnected = true;

  constructor(
    public auth: AuthService,
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar,
    private connectionService: ConnectionService
  ) {}

  ngOnInit() {
    // Track connection status
    this.connectionService
      .monitor()
      .subscribe(isConnected => (this.isConnected = isConnected));

    // Track PWA version
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        // Will show snackbar notification that PWA client is out of date
        // and needs to be refreshed. Note: iOS at 12.2  not working,
        // PWA apps do not recheck there cache on startup, it seems to be a bug
        // that should be resolved (If you really need this then some sort of
        // version check between firestore and application version probably is a solution)
        // In iOS you can refresh the application in the browser to force the PWA to reload
        let newVersionSnackBarRef = this.snackBar.open(
          "New version available.",
          "Load New Version?",
          {
            duration: 20000
          }
        );
        newVersionSnackBarRef.onAction().subscribe(() => {
          console.log("New version action pressed");
          window.location.reload();
        });
      });
    }
  }

  logout() {
    this.auth.signOut();
  }
}
