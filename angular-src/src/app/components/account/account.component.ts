import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { trigger, transition, style, animate } from "@angular/animations";

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
  email: string;
  avatar;
  imagename: string;
  imagedata: string;
  wallpaper: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.name;
    this.email = this.user.email;
    if (this.user) {
      this.authService.getUserByUsername(this.user.name).subscribe(data => {
        this.avatar = `../../../assets/${data.user.avatar}`;
        // console.log(data)
        if (data.user.posts.length > 0) {
          this.wallpaper = `../../../assets/${data.user.posts[0].photo}`;
        } else {
          this.wallpaper = `../../../assets/${data.user.avatar}`;
        }
        console.log(`user: ${this.user.email}`);
      });
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
}
