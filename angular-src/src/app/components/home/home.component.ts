import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from '../../../environments/environment';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from "@angular/animations";
import { PostService } from "src/app/services/post.service";
import { Post } from "src/app/models/post.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("500ms ease-in-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("500ms", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      for (var i = 0; i < this.posts.length; i++) {
        this.posts[i].photo = `${environment.pathToPhotos}${posts[i].photo}`;
      }
    });
  }

}
