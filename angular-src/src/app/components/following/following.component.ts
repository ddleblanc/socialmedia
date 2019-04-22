import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import * as _ from 'underscore';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss'],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("500ms ease-in-out", style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class FollowingComponent implements OnInit {

  public posts: Post[];
  private user: User;
  public postsOfFollowing: Post[] = [];
  public sortedPosts: Post[];

  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"));
    let username = user.name;
    this.authService.getUserByUsername(username).subscribe(data => {
      this.user = data.user;
      this.postService.getPosts().subscribe(posts => {
        this.posts = posts;
        for (let post of this.posts) {
          if (this.user.following.includes(post.user)) {
            post.photo = `../../../assets/${post.photo}`
            this.postsOfFollowing.push(post)
          }
        }
        this.sortedPosts = _.sortBy(this.postsOfFollowing, 'createdAt');
        console.log(this.sortedPosts)
      });
    });

  }



}
