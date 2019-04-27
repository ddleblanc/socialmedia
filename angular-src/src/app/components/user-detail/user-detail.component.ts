import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { trigger, transition, style, animate } from '@angular/animations';
import { Location } from "@angular/common";
import { FollowService } from 'src/app/services/follow.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("500ms ease-in-out", style({ opacity: 1 }))
      ])
    ]),
    trigger("profilePicAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "scale(0)" }),
        animate(
          "500ms ease-in-out",
          style({ opacity: 1, transform: "scale(1)" })
        )
      ])
    ]),
    trigger("bottomNavEnterAnimation", [
      transition(":enter", [
        style({ transform: "translateY(70px)", opacity: 0 }),
        animate(
          "320ms ease-in-out",
          style({ transform: "translateY(0px)", opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateY(0px)", opacity: 1 }),
        animate("420ms", style({ transform: "translateY(70px)", opacity: 0 }))
      ])
    ]),
    trigger("postsEnterAnimation", [
      transition(":enter", [
        style({ transform: "translateY(70px)", opacity: 0 }),
        animate(
          "620ms 420ms ease-in-out",
          style({ transform: "translateY(0px)", opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateY(0px)", opacity: 1 }),
        animate("420ms", style({ transform: "translateY(70px)", opacity: 0 }))
      ])
    ])
  ]
})
export class UserDetailComponent implements OnInit {
  private username: string;
  private data;
  private avatar: string;
  private wallpaper: string;
  private following = false;
  public user: User;
  private accountUser: User;
  currentPostNumber = -1;

  constructor(private authService: AuthService, private route: ActivatedRoute, private _location: Location, private followService: FollowService) { }

  ngOnInit() {
    this.getUsers()
  }

  onBackClicked() {
    this._location.back();
  }

  // Scroll behavior
  scrollToNextPost() {
    if (this.currentPostNumber < this.user.posts.length - 1) {
      this.currentPostNumber++
      let el = document.getElementById(`post_${this.currentPostNumber}`)
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    } else {
      console.log("Bottom reached")
    }
  }

  scrollToPreviousPost() {
    if (this.currentPostNumber != -1) {
      console.log(this.currentPostNumber)
      if (this.currentPostNumber == 0) {
        this.currentPostNumber--
        let top = document.getElementById(`user-detail-container`)
        top.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        console.log("Top reached")
      } else {
        this.currentPostNumber--
        let el = document.getElementById(`post_${this.currentPostNumber}`)
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }
    }
  }

  // Get user accounts
  getUsers() {
    this.route.params.subscribe(params => { this.username = params.username })
    this.authService.getUserByUsername(this.username).subscribe(data => {
      this.user = data.user;
      this.avatar = `${environment.pathToPhotos}${data.user.avatar}`;
      // console.log(data)
      if (data.user.posts.length > 0) {
        this.wallpaper = `${environment.pathToPhotos}${data.user.posts[0].photo}`;
        for (var i = 0; i < this.user.posts.length; i++) {
          this.user.posts[i].photo = `${environment.pathToPhotos}${data.user.posts[i].photo}`;
        }
      } else {
        this.wallpaper = `${environment.pathToPhotos}${data.user.avatar}`;
      }
      this.getAccountUser()
      console.log(`user: ${this.user.email}`);
    });
  }
  getAccountUser() {
    let user = JSON.parse(localStorage.getItem("user"));
    let username = user.name;
    this.authService.getUserByUsername(username).subscribe(data => {
      this.accountUser = data.user;
      if (this.accountUser.following.includes(this.user._id)) {
        this.following = true;
        console.log("following")
      } else {
        this.following = false;
        console.log("not following")
      }

    });
  }

  // Account user = currently logged in user
  onFollow() {
    let theirId = this.user._id;
    let userId = { userId: this.accountUser._id };
    console.log(this.user)
    if (this.user._id != this.accountUser._id) {
      if (!this.accountUser.following.includes(theirId)) {
        console.log("t: " + theirId)
        console.log("i: " + userId)
        this.followService.addUserToFollowing(theirId, userId).subscribe(data => {
          this.data = data;
          if (this.data.success) {
            this.ngOnInit();
          } else {
            // this.router.navigate(['/'])
            console.log("failed");
          }
        });
      } else {
        console.log("t: " + theirId)
        console.log("i: " + userId)
        this.followService.removeUserFromFollowing(theirId, userId).subscribe(data => {
          this.data = data;
          if (this.data.success) {
            this.ngOnInit()
          } else {
            // this.router.navigate(['/'])
            console.log("failed");
          }
        });
      }

    }
  }
}
