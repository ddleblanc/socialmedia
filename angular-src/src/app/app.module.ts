import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { LottieAnimationViewModule } from "lottie-angular2";
import { ServiceWorkerModule } from "@angular/service-worker";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthService } from "./services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./components/auth/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { CreateComponent } from "./components/create/create.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    LottieAnimationViewModule.forRoot(),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
