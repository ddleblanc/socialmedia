import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';
import { Post } from 'src/app/models/post.model';
import { CommentService } from 'src/app/services/comment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  user: any;
  data;
  private username: string;
  public postsWithComments: Post[] = [];

  constructor(private authService: AuthService, private commentService: CommentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.name;
    this.getUser(false)
  }

  onLikeComment(comment, i) {
    let commentId = comment._id;
    let userId = { userId: this.user._id };
    console.log()
    if (!comment.likes.includes(this.user._id)) {
      this.commentService.addLikeToComment(commentId, userId).subscribe(data => {
        this.data = data;
        if (this.data.success) {
          this.getUser(true)
        } else {
          // this.router.navigate(['/'])
          console.log("failed");
        }
      });
    } else {
      this.commentService.removeLikeFromComment(commentId, userId).subscribe(data => {
        this.data = data;
        if (this.data.success) {
          this.getUser(true)
        } else {
          // this.router.navigate(['/'])
          console.log("failed");
        }
      });
    }


  }

  onUserSelected(username) {
    this.router.navigate(['user', username]), { relativeTo: this.route }
  }

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth", block: 'start' });
  }

  getUser(update) {
    this.authService.getUserByUsername(this.username).subscribe(data => {
      this.user = data.user;
      if (!update) {

        // Check if posts exist
        if (data.user.posts.length > 0) {
          // If post has comments, push to postsWithComments
          for (let post of this.user.posts) {
            if (post.comments.length > 0) {
              this.postsWithComments.push(post)
            }
          }
          for (let post of this.postsWithComments) {
            post.photo = `../../../assets/${post.photo}`;
          }
        }
      } else {
        let updatedPosts: Post[] = []
        for (let post of this.user.posts) {
          if (post.comments.length > 0) {
            updatedPosts.push(post)
          }
        }
        for (let post of updatedPosts) {
          post.photo = `../../../assets/${post.photo}`;
        }
        this.postsWithComments = updatedPosts;
      }
    });
  }

}
