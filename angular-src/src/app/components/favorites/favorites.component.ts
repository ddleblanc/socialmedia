import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import * as _ from 'underscore';
import { trigger, transition, style, animate } from '@angular/animations';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("500ms ease-in-out", style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class FavoritesComponent implements OnInit {

  public posts: Post[];
  private user: User;
  public likedPosts: Post[] = [];
  public sortedPosts: Post[];
  currentPostNumber = 0;

  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"));
    let username = user.name;
    this.authService.getUserByUsername(username).subscribe(data => {
      this.user = data.user;
      this.postService.getPosts().subscribe(posts => {
        this.posts = posts;
        for (let post of this.posts) {
          if (post.likes.includes(this.user._id)) {
            post.photo = `${environment.pathToPhotos}${post.photo}`
            this.likedPosts.push(post)
          }
        }
        this.sortedPosts = _.sortBy(this.likedPosts, 'createdAt');
        console.log(this.sortedPosts)
      });
    });

  }

  scrollToNextPost() {
    if (this.currentPostNumber < this.sortedPosts.length - 1) {
      this.currentPostNumber++
      let el = document.getElementById(`post_${this.currentPostNumber}`)
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    } else {
      console.log("Bottom reached")
    }
  }
  scrollToPreviousPost() {
    if (this.currentPostNumber != 0) {
      console.log(this.currentPostNumber)
      if (this.currentPostNumber == 0) {
        this.currentPostNumber--
        let top = document.getElementById(`favorites-container`)
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
