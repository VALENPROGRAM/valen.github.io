import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-splash-screen",
  templateUrl: "./splash-screen.component.html",
  styleUrls: ["./splash-screen.component.scss"],
})
export class SplashScreenComponent {
  @Output() initial = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  public navigateToLogin() {
    this.router.navigateByUrl("login");
    this.initial.emit(false);
  }
}
