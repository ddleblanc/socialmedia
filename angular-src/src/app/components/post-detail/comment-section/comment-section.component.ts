import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { Post } from 'src/app/models/post.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
  animations: [
    trigger("removeBtnAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate(
          "320ms 420ms ease-in-out",
          style({ opacity: 1, transform: 'translateX(0px)' })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1, transform: 'translateX(0px)' }),
        animate("0ms", style({ opacity: 0, transform: 'translateX(0px)' }))
      ])
    ]),
  ]
})
export class CommentSectionComponent implements OnInit {
  data;
  user;
  private confirmingCommentDeletion = false;
  private deleted = false;
  @Input() userId;
  @Input() post;
  @Output() refreshPost: EventEmitter<any> = new EventEmitter();

  // TODO emit event that closed the comment section when swiped down && top reached 


  constructor(private router: Router, private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit() {
    // this.comments = this.post.comments;
    this.user = JSON.parse(localStorage.getItem("user"));
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

  onDeleteComment(data) {
    let btnId = data.btnId;
    let userId = data.userId;
    if (this.user.id == userId) {
      let el = document.getElementById(btnId);
      el.classList.add('delete-bg-active');
      this.confirmingCommentDeletion = true;
      console.log('delete comment')
    }

  }

  onCancelDeleteComment(id) {
    let el = document.getElementById(id);
    el.classList.remove('delete-bg-active')
    this.confirmingCommentDeletion = false;
  }

  onConfirmDeletion(ids) {
    let btnId = ids.deleteBtn;
    let commentId = ids.commentId;
    let el = document.getElementById(btnId);
    el.classList.add('deleted-bg-active');
    this.confirmingCommentDeletion = false;
    this.deleted = true;
    setTimeout(() => {
      el.classList.add('gone');
    }, 1420)
    console.log(commentId)
    this.removeCommentById(commentId)
  }

  onUserSelected(username) {
    this.router.navigate(['user', username]), { relativeTo: this.route }
  }

  removeCommentById(id) {

    this.commentService.removeCommentById(id).subscribe(data => {
      this.data = data;
      if (this.data.success) {
        console.log("genius");
        setTimeout(() => {
          this.refreshPost.emit(null);
        }, 1420)

      } else {
        // this.router.navigate(['/'])
        console.log("failed");
      }
    });

  }

}
