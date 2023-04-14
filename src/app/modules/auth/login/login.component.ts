import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { RouteData } from "src/app/@core/models/route-data.interface";
import { FormLogin } from "./../../../@core/models/login.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  title?: string = "";
  type?: string = "";
  formLogin: FormLogin = {
    username: "Username",
    password: "Password",
    captcha: "Captcha input",
    type: "",
  };
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe((value: RouteData) => {
      this.title = value.title;
      this.type = value.type;
      this.formLogin.type = value.type!;
    });
  }

  public handleLogin() {
    this.router.navigateByUrl(`/${this.formLogin.type}`);
  }
}
