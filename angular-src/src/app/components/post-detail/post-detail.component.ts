import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { Location } from "@angular/common";
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { FollowService } from 'src/app/services/follow.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(
          "320ms ease-in-out",
          style({ opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("420ms", style({ opacity: 0 }))
      ])
    ]),
    trigger("bottomNavEnterAnimation", [
      transition(":enter", [
        style({ transform: "translateY(70px)", opacity: 0 }),
        animate(
          "320ms ease-in-out",
          style({ transform: "translateY(0px)", opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateY(0px)", opacity: 1 }),
        animate("420ms", style({ transform: "translateY(70px)", opacity: 0 }))
      ])
    ]),
    trigger("commentSectionAnimation", [
      transition(":enter", [
        style({ height: "0%" }),
        animate(
          "320ms ease-in-out",
          style({ height: "calc(50% - 48px)" })
        )
      ]),
      transition(":leave", [
        style({ height: "calc(50% - 48px)" }),
        animate("120ms", style({ height: "0%" }))
      ])
    ]),
    trigger("buttonsAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(
          "320ms ease-in-out",
          style({ opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("100ms", style({ opacity: 0 }))
      ])
    ])]
})
export class PostDetailComponent implements OnInit {
  data;
  post: Post;
  user: User;
  comment: string;
  postId: string;
  likes = [];
  deleted = false;
  commentSectionOpen = false;
  confirmingDeletion = false;
  isMenuOpen = false;
  backBtnClicked = false;
  @ViewChild("commentInput", { read: ElementRef }) commentInput: ElementRef;

  constructor(private followService: FollowService, private postService: PostService, private router: Router, private route: ActivatedRoute, private _location: Location, private authService: AuthService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => { this.postId = params._id })
    console.log()
    this.getPost()
    let user = JSON.parse(localStorage.getItem("user"));
    this.authService.getUserByUsername(user.name).subscribe(data => {
      this.user = data.user;
      console.log(this.user)
      this.user.avatar = `${environment.pathToPhotos}${data.user.avatar}`;
      // console.log(data)
      if (data.user.posts.length > 0) {
        this.user.wallpaper = `${environment.pathToPhotos}${data.user.posts[0].photo}`;
      } else {
        this.user.wallpaper = `${environment.pathToPhotos}${data.user.avatar}`;
      }

      console.log(`user: ${this.user.email}`);
    });

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
    this.confirmingDeletion = false;
  }

  onBackClicked() {
    if (this.isMenuOpen) {
      this.toggleMenu()
    } else {
      this._location.back();
    }

  }

  onDelete() {
    this.confirmingDeletion = true;
    this.postService.deletePost(this.post._id).subscribe(data => {
      if (data.success) {
        this.deleted = true;
        setTimeout(() => {
          this.router.navigate(['/account/posts'])
        }, 1200)
      }
    })
  }

  swipeUp() {
    if (!this.isMenuOpen) {
      this.openCommentSection()
    } else if (this.isMenuOpen) {
      this.onDelete()
    }
  }
  swipeDown() {
    if (!this.isMenuOpen) {
      this.closeCommentSection()
    } else if (this.isMenuOpen && this.confirmingDeletion) {
      this.confirmingDeletion = false;

    } else if (this.isMenuOpen && !this.confirmingDeletion) {
      this.toggleMenu()
    }
  }
  openCommentSection() {
    this.commentSectionOpen = true;
    setTimeout(() => {
      this.commentInput.nativeElement.placeholder = 'Leave a comment..';
    }, 220)
  }
  closeCommentSection() {
    this.commentSectionOpen = false;
    setTimeout(() => {
      this.commentInput.nativeElement.placeholder = 'Say something if you like it..';
    }, 120)

  }

  onSendComment() {
    if (this.commentInput.nativeElement.value != "") {
      let commentObj = { commentData: { comment: this.comment, user: this.user._id } }
      this.postService.addCommentToPost(this.post._id, commentObj).subscribe(data => {
        this.data = data;
        if (this.data.success) {
          this.commentInput.nativeElement.value = "";
          this.ngOnInit()
        } else {
          // this.router.navigate(['/'])
          console.log("failed");
        }
      });
    }
  }

  async getPost() {
    this.data = await this.postService.getPost(
      this.postId
    )
    if (this.data.success) {
      this.data.post.photo = `${environment.pathToPhotos}${this.data.post.photo}`;
      this.post = this.data.post;
      console.log(this.post)
      if (this.post.likes != undefined) {
        this.likes = this.post.likes;
      }
    }
    else if (!this.data.success) {
      console.log("hierdoor doet ie het niet" + this.data.msg)
      // this.router.navigate(['/'])
    }
    console.log(this.post)
  }

  onLike() {
    let postId = this.post._id;
    let userId = { userId: this.user._id }
    console.log(this.user)

    if (!this.likes.includes(this.user._id)) {
      this.postService.addLikeToPost(postId, userId).subscribe(data => {
        this.data = data;
        if (this.data.success) {
          this.ngOnInit();
        } else {
          // this.router.navigate(['/'])
          console.log("failed");
        }
      });
    } else {
      this.postService.removeLikeFromPost(postId, userId).subscribe(data => {
        this.data = data;
        if (this.data.success) {
          this.ngOnInit()
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
