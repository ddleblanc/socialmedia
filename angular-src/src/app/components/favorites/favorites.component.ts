import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import * as _ from 'underscore';
import { trigger, transition, style, animate } from '@angular/animations';
import { environment } from '../../../environments/environment';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  private user = JSON.parse(localStorage.getItem("user"));
  public posts$ = this.postService.posts$.pipe(map(posts => posts.filter(post => post.likes.includes(this.user.id))))
  public likedPosts;
  public sortedPosts: Post[];
  currentPostNumber = 0;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts$.subscribe(posts => this.likedPosts = posts);
  }

  scrollToNextPost() {
    if (this.currentPostNumber < this.likedPosts.length - 1) {
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
