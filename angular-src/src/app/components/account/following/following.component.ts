import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/services/follow.service';
import { User } from 'src/app/models/user.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss'],
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
export class FollowingComponent implements OnInit {

  following: User[];

  constructor(private followService: FollowService) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"));
    let username = user.name;
    this.followService.getFollowingOfUser(username).subscribe(data => {
      console.log(data)
      this.following = data.following;
      for (let user of this.following) {
        user.avatar = `../../../../assets/${user.avatar}`
      }
    })
  }
}