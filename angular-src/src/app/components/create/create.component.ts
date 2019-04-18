import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { PostService } from "../../services/post.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { User } from "../../models/user.model";
import { ValidationService } from "../../services/validation.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("500ms ease-in-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ transform: "translateX(0)", opacity: 1 }),
        animate("500ms", style({ transform: "translateX(100%)", opacity: 0 }))
      ])
    ])
  ]
})
export class CreateComponent implements OnInit {
  url: String;
  imagename: string;
  imagedata: string | ArrayBuffer;
  title: String;
  story: String;
  user: User;
  ageRestriction: Boolean = false;
  data: any;

  @ViewChild("fileInput", { read: ElementRef }) fileInput: ElementRef;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private validateService: ValidationService,
    private _location: Location
  ) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    // console.log(this.user.id )
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event) {
    console.log("onSelectFile");
    if (event.target.files && event.target.files[0]) {
      const imageFile: File = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      console.dir(event.target.files[0]);
      reader.onload = event => {
        // called once readAsDataURL is completed
        // set the image value to the Base64 string -> can be saved in dtb
        this.imagename = imageFile.name;
        this.imagedata = reader.result;
        // set the image src -> so that it can be displayed as preview
        this.url = reader.result as string;
      };
    }
  }

  onBackClicked() {
    this._location.back();
  }

  onPostSubmit() {
    const post = {
      username: this.user.name,
      userId: this.user.id,
      title: this.title,
      story: this.story,
      age_restriction: this.ageRestriction,
      photo: { name: this.imagename, data: this.imagedata }
    };

    // console.log(post)
    // Required fields
    // if (!this.validateService.validatePost(post)) {
    //   // this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
    //   console.log("Fill in all fields");
    //   return false;
    // } else {
    //Post post
    this.postService.addPost(post).subscribe(data => {
      this.data = data;
      if (this.data.success) {
        this.router.navigate([""]);
        // this.flashMessage.show('Posted', {cssClass: 'alert-success', timeout: 3000});
        // this.router.navigate(['/'])
      } else {
        // this.router.navigate(['/'])
      }
    });
    // }
  }
}
