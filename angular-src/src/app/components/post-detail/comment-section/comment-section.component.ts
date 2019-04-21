import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { Post } from 'src/app/models/post.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  data;
  @Input() userId;
  @Input() post;
  @Output() refreshPost: EventEmitter<any> = new EventEmitter();

  // TODO emit event that closed the comment section when swiped down && top reached 


  constructor(private router: Router, private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit() {
    // this.comments = this.post.comments;
  }

  onLikeComment(comment, i) {
    let commentId = comment._id;
    let userId = { userId: this.userId };
    console.log()
    if (!comment.likes.includes(this.userId)) {
      this.commentService.addLikeToComment(commentId, userId).subscribe(data => {
        this.data = data;
        if (this.data.success) {
          this.refreshPost.emit(null);
        } else {
          // this.router.navigate(['/'])
          console.log("failed");
        }
      });
    } else {
      this.commentService.removeLikeFromComment(commentId, userId).subscribe(data => {
        this.data = data;
        if (this.data.success) {
          this.refreshPost.emit(null);
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

}
