import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CreateComponent } from './components/create/create.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AccountComponent } from './components/account/account.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MyPostsComponent } from './components/account/my-posts/my-posts.component';
import { FollowersComponent } from './components/account/followers/followers.component';
import { FollowingComponent } from './components/account/following/following.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { TimeAgo } from './pipes/timeAgo.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ServiceWorkerModule.register("ngsw-worker.js", {
          enabled: environment.production
        })
      ],
      declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        FavoritesComponent,
        CreateComponent,
        MessagesComponent,
        AccountComponent,
        PostDetailComponent,
        UserDetailComponent,
        MyPostsComponent,
        FollowersComponent,
        FollowingComponent,
        PostListComponent,
        TimeAgo
      ],
      providers: [

        HttpClientModule,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
