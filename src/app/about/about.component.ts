import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    // Example using snackbar notifications (Instead of toast)
    this.snackBar.open("Contact David to get help", "Contact", {
      duration: 2000
    });
  }
}
