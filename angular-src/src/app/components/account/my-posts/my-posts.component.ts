import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Post } from 'src/app/models/post.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss'],
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
export class MyPostsComponent implements OnInit {

  public posts: Post[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"));
    let username = user.name;
    this.authService.getUserByUsername(username).subscribe(data => {
      this.posts = data.user.posts;
      for (let post of this.posts) {
        post.photo = `../../../../assets/${post.photo}`
      }
    });
  }

}
