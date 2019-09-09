import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { LottieAnimationViewModule } from "lottie-angular2";
import { ServiceWorkerModule } from "@angular/service-worker";
import { MomentModule } from "ngx-moment";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthService } from "./services/auth.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { LoginComponent } from "./components/auth/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { CreateComponent } from "./components/create/create.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { environment } from "../environments/environment";
import { AccountComponent } from "./components/account/account.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { CommentSectionComponent } from "./components/post-detail/comment-section/comment-section.component";
import { TimeAgo } from "./pipes/timeAgo.pipe";
import * as Hammer from "hammerjs";
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { HammertimeDirective } from "./directives/hammertime.directive";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostListItemComponent } from "./components/post-list/post-list-item/post-list-item.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { FavoritesComponent } from "./components/favorites/favorites.component";
import { CommentService } from "./services/comment.service";
import { FollowService } from "./services/follow.service";
import { PostService } from "./services/post.service";
import { ValidationService } from "./services/validation.service";
import { FollowingComponent } from "./components/account/following/following.component";
import { MyPostsComponent } from "./components/account/my-posts/my-posts.component";
import { FollowersComponent } from "./components/account/followers/followers.component";
import { LikeService } from "./services/like.service";

export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    if (element.classList.contains("hammered")) {
      let mc = new Hammer(element);
      mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
      return mc;
    } else {
      let mc = new Hammer(element, {
        touchAction: "pan-y"
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
    PostListItemComponent,
    MessagesComponent,
    FavoritesComponent,
    FollowingComponent,
    MyPostsComponent,
    FollowersComponent
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
  providers: [
    AuthService,
    CommentService,
    FollowService,
    PostService,
    ValidationService,
    AuthGuard,
    HttpClientModule,
    LikeService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
