import { Component, OnInit, Input } from "@angular/core";
import { KVP } from "src/app/models/kvp.model";

@Component({
  selector: "grid-display",
  templateUrl: "./grid-display.component.html",
  styleUrls: ["./grid-display.component.scss"]
})
export class GridDisplayComponent implements OnInit {
  @Input() tilePairs: KVP[];

  constructor() {}

  ngOnInit() {
    console.log("tilePairs", this.tilePairs);
  }
}
