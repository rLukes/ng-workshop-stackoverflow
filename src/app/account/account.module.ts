import { RegisterComponent } from "./../register/register.component";
import { LoginComponent } from "./../login/login.component";
import { HomeComponent } from "./../home/home.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent],
  exports: [HomeComponent, LoginComponent, RegisterComponent]
})
export class AccountModule {}
