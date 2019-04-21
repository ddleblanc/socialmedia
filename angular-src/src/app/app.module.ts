import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { LottieAnimationViewModule } from "lottie-angular2";
import { ServiceWorkerModule } from "@angular/service-worker";
import { MomentModule } from 'ngx-moment';

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
import { AccountComponent } from './components/account/account.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommentSectionComponent } from './components/post-detail/comment-section/comment-section.component';
import { TimeAgo } from './pipes/timeAgo.pipe';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammertimeDirective } from './directives/hammertime.directive';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list/post-list-item/post-list-item.component';

export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    if (element.classList.contains('hammered')) {
      let mc = new Hammer(element);
      mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
      return mc;
    } else {
      let mc = new Hammer(element, {
        touchAction: "pan-y",
      });
      return mc;
    }

  }
}


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent,
    RegisterComponent,
    AccountComponent,
    PostDetailComponent,
    CommentSectionComponent,
    TimeAgo,
    HammertimeDirective,
    UserDetailComponent,
    PostListComponent,
    PostListItemComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MomentModule,
    LottieAnimationViewModule.forRoot(),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [AuthService, AuthGuard,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
