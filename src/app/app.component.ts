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
  isSubmitTerms = false;

  constructor() {}

  ngOnInit(): void {
    const isSubmitInLocal = localStorage.getItem("isSubmitTerms");
    this.isSubmitTerms = isSubmitInLocal === "YES" ? true : false;
    // setTimeout(() => {
    //   this.initial = false;
    //   this.router.navigateByUrl('login');
    // }, 3000);
  }

  public getSubmitTerm(event: boolean) {
    this.isSubmitTerms = event;
  }
}
