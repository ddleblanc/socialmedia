import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/user.model";
import { trigger, transition, style, animate } from "@angular/animations";
import { Post } from 'src/app/models/post.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("500ms ease-in-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("500ms 200ms ease-in-out", style({ opacity: 0 }))
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
  showingMenu = false;
  ageRestriction: boolean;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"));
    let username = user.name;
    this.authService.getUserByUsername(username).subscribe(data => {
      console.log(data.user)
      this.user = data.user;
      this.avatar = `${environment.pathToPhotos}${data.user.avatar}`;
      this.wallpaper = `${environment.pathToPhotos}${data.user.avatar}`;
      this.posts = this.user.posts;
      this.getSumOfLikes()
    });

  }

  getSumOfLikes() {
    for (let post of this.user.posts) {
      for (let like of post.likes) {
        this.likes++;
      }
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

  // TODO Update user profile picture
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
  // CHILD ROUTE NAVIGATION
  showFollowing() {
    this.router.navigate(['following'], { relativeTo: this.route })
  }
  showFollowers() {
    this.router.navigate(['followers'], { relativeTo: this.route })
  }
  showPosts() {
    this.router.navigate(['posts'], { relativeTo: this.route })
  }

  scrollToNextPost() {
    if (this.router.url == '/account/posts') {
      if (this.currentPostNumber < this.posts.length - 1) {
        this.currentPostNumber++
        let el = document.getElementById(`post_${this.currentPostNumber}`)
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

      } else {
        console.log("Bottom reached")
      }
    }

  }
  scrollToPreviousPost() {
    if (this.router.url == '/account/posts') {
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
  showMenu() {
    this.showingMenu = !this.showMenu;
  }
}
