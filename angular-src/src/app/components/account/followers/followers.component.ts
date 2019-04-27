import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/services/follow.service';
import { User } from 'src/app/models/user.model';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss'],
  animations: [
    trigger("postsEnterAnimation", [
      transition(":enter", [
        style({ transform: "translateY(70px)", opacity: 0 }),
        animate(
          "620ms ease-in-out",
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
export class FollowersComponent implements OnInit {

  followers: User[];

  constructor(private followService: FollowService, private router: Router) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"));
    let username = user.name;
    this.followService.getFollowersOfUser(username).subscribe(data => {
      this.followers = data.followers;
      for (let follower of this.followers) {
        follower.avatar = `${environment.pathToPhotos}${follower.avatar}`
      }
    })
  }

  onUserSelected(username) {
    this.router.navigate(['user', username])
  }
}
