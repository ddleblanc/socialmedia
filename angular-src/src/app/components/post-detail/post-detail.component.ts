import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { Location } from "@angular/common";
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

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
        style({ transform: "translateY(50vh)" }),
        animate(
          "320ms ease-in-out",
          style({ transform: "translateY(0vh)" })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateY(0vh)" }),
        animate("120ms", style({ transform: "translateY(50vh)" }))
      ])
    ])]
})
export class PostDetailComponent implements OnInit {
  data;
  post: Post;
  user: User;
  comment: string;
  postId: string;
  commentSectionOpen = false;
  backBtnClicked = false;
  @ViewChild("commentInput", { read: ElementRef }) commentInput: ElementRef;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute, private _location: Location, private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.postId = params._id })
    console.log()
    this.getPost()
    this.commentInput.nativeElement.click();
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user) {
      this.authService.getUserByUsername(this.user.name).subscribe(data => {
        this.user.avatar = `../../../assets/${data.user.avatar}`;
        // console.log(data)
        if (data.user.posts.length > 0) {
          this.user.wallpaper = `../../../assets/${data.user.posts[0].photo}`;
        } else {
          this.user.wallpaper = `../../../assets/${data.user.avatar}`;
        }
        console.log(`user: ${this.user.email}`);
      });
    }
  }

  onBackSwiped() {
    this.backBtnClicked = true;
    setTimeout(() => {
      this._location.back();
    }, 220)
  }

  onBackClicked() {
    this._location.back();

  }

  openCommentSection() {
    console.log("swiped");
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
    let commentObj = { commentData: { comment: this.comment, user: this.user.id } }
    this.postService.addCommentToPost(this.post._id, commentObj).subscribe(data => {
      this.data = data;
      if (this.data.success) {
        this.commentInput.nativeElement.value = "";
        console.log("genius");
        this.ngOnInit()
      } else {
        // this.router.navigate(['/'])
        console.log("failed");
      }
    });
  }

  async getPost() {
    this.data = await this.postService.getPost(
      this.postId
    )
    if (this.data.success) {
      this.data.post.photo = "../../../assets/" + this.data.post.photo;
      this.post = this.data.post;
    }
    else if (!this.data.success) {
      console.log("hierdoor doet ie het niet" + this.data.msg)
      // this.router.navigate(['/'])
    }
    console.log(this.post)
  }

  onUserSelected(username) {
    this.router.navigate(['user', username]), { relativeTo: this.route }
  }

}
