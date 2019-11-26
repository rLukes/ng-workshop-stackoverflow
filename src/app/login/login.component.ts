import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  email: string;
  password: string;
  message: string;

  constructor() {}

  onLoginClick() {
    if (this.email == "admin@gmail.com" && this.password == "manager") {
      this.message = "Successful Login!";
    } else {
      this.message = "Invalid Login";
    }
  }
}
