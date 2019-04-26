import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { trigger, transition, style, animate } from '@angular/animations';
import { Location } from "@angular/common";

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
  public user: User;
  currentPostNumber = -1;

  constructor(private authService: AuthService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.username = params.username })
    this.authService.getUserByUsername(this.username).subscribe(data => {
      this.user = data.user;
      this.avatar = `../../../assets/${data.user.avatar}`;
      // console.log(data)
      if (data.user.posts.length > 0) {
        this.wallpaper = `../../../assets/${data.user.posts[0].photo}`;
        for (var i = 0; i < this.user.posts.length; i++) {
          this.user.posts[i].photo = `../../../assets/${data.user.posts[i].photo}`;
        }
      } else {
        this.wallpaper = `../../../assets/${data.user.avatar}`;
      }

      console.log(`user: ${this.user.email}`);
    });
  }
  onBackClicked() {
    this._location.back();

  }

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

}
