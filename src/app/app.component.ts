import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "valen";
  initial: boolean = true;

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.initial = false;
    //   this.router.navigateByUrl('login');
    // }, 3000);
  }
}
