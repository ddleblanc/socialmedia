import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./components/auth/login/login.component";
import { CreateComponent } from "./components/create/create.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { AccountComponent } from "./components/account/account.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "create",
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "account",
    component: AccountComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
