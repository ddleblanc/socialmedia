import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { trigger, transition, style, animate } from "@angular/animations";
import { Post } from 'src/app/models/post.model';

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("500ms ease-in-out", style({ opacity: 1 }))
      ])
    ]),
    trigger("profilePicAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "scale(0)" }),
        animate(
          "500ms ease-in-out",
          style({ opacity: 1, transform: "scale(1)" })
        )
      ])
    ])
  ]
})
export class AccountComponent implements OnInit {
  user: User;
  username: string;
  avatar;
  imagename: string;
  imagedata: string;
  wallpaper: string;
  posts: Post[];
  likes = 0;
  currentPostNumber = -1;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"));
    let username = user.name;
    this.authService.getUserByUsername(username).subscribe(data => {
      console.log(data.user)
      this.user = data.user;
      this.avatar = `../../../assets/${data.user.avatar}`;
      this.wallpaper = `../../../assets/${data.user.avatar}`;
      this.posts = this.user.posts;
      for (let post of this.posts) {
        post.photo = `../../../assets/${post.photo}`
      }
      this.getSumOfLikes()
    });

  }

  getSumOfLikes() {
    for (let post of this.user.posts) {
      for (let comment of post.comments) {
        for (let like of comment.likes) {
          this.likes++;
        }
      }
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
  onFileSelected(event) {
    //   console.log("onSelectFile");
    //   if (event.target.files && event.target.files[0]) {
    //     const imageFile: File = event.target.files[0];
    //     var reader = new FileReader();
    //     reader.readAsDataURL(event.target.files[0]); // read file as data url
    //     console.dir(event.target.files[0]);
    //     reader.onload = event => {
    //       // called once readAsDataURL is completed
    //       // set the image value to the Base64 string -> can be saved in dtb
    //       this.imagename = imageFile.name;
    //       this.imagedata = reader.result;
    //       // set the image src -> so that it can be displayed as preview
    //       this.user.avatar.data = reader.result as string;
    //     };
    //   }
  }

  scrollToNextPost() {
    if (this.currentPostNumber < this.posts.length - 1) {
      this.currentPostNumber++
      let el = document.getElementById(`post_${this.currentPostNumber}`)
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    } else {
      console.log("Bottom reached")
    }
  }
  scrollToPreviousPost() {
    if (this.currentPostNumber != -1) {
      console.log(this.currentPostNumber)
      if (this.currentPostNumber == 0) {
        this.currentPostNumber--
        let top = document.getElementById(`account-container`)
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
