import { Component, EventEmitter, HostListener, Output } from "@angular/core";

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

  public submitTerms() {
    this.isSubmitTerms = true;
    this.isSubmit.emit(this.isSubmitTerms);
    localStorage.setItem("isSubmitTerms", "YES");
  }
}
