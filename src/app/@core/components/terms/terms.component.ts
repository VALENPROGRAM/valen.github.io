import { Component, EventEmitter, HostListener, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-terms",
  templateUrl: "./terms.component.html",
  styleUrls: ["./terms.component.scss"],
})
export class TermsComponent {
  public checkboxTerms = false;
  public isSubmitTerms = false;
  @Output() isSubmit = new EventEmitter<boolean>();

  @HostListener("document:keydown.enter", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (event.keyCode === 13 && this.checkboxTerms) {
      this.submitTerms();
    }
  }

  constructor(private router: Router) {}

  public submitTerms() {
    this.isSubmitTerms = true;
    this.isSubmit.emit(this.isSubmitTerms);
    localStorage.setItem("isSubmitTerms", "YES");
    this.router.navigateByUrl("document");
  }
}
