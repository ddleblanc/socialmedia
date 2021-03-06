import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { PostService } from "../../services/post.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { User } from "../../models/user.model";
import { ValidationService } from "../../services/validation.service";
import * as nsfwjs from "nsfwjs";

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
    ])
  ]
})
export class CreateComponent implements OnInit {
  url: String;
  photo: File = null;
  title: String;
  user: User;
  ageRestriction: Boolean = false;
  data: any;
  uploading = false;
  classifying = false;

  @ViewChild("fileInput", { read: ElementRef }) fileInput: ElementRef;
  @ViewChild("titleInput", { read: ElementRef }) titleInput: ElementRef;

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
    this.photo = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }

  onBackClicked() {
    this._location.back();
  }

  onPostSubmit() {
    this.uploading = true;
    const fd = new FormData();
    const post = {
      username: this.user.name,
      user: this.user.id,
      title: this.title,
      age_restriction: this.ageRestriction
    };
    fd.append("photo", this.photo, this.photo.name);
    fd.append("post", JSON.stringify(post));

    this.postService.addPost(fd).subscribe(data => {
      this.data = data;
      if (this.data.success) {
        this.postService.setCurrentPostUrl(this.data.createdPost.photo);
        this.router.navigate(["post", this.data.createdPost._id]);
        // this.router.navigate(['/'])
      } else {
        // this.router.navigate(['/'])
        this.uploading = false;
        console.log("failed");
      }
    });
  }
  async classifyImg() {
    this.classifying = true;
    const img = <HTMLImageElement>document.getElementById("img");
    // Load model from my S3.
    // See the section hosting the model files on your site.
    const model = await nsfwjs.load();

    // Classify the image
    const predictions = await model.classify(img, 2);
    console.log("Predictions: ", predictions);
    let maxProbability = Math.max.apply(
      Math,
      predictions.map(function(prediction) {
        return prediction.probability;
      })
    );
    let prediction = predictions.find(p => p.probability === maxProbability);
    if (prediction.className == "Porn") {
      this.ageRestriction = true;
    } else {
      this.ageRestriction = false;
    }
    this.classifying = false;
  }
  onAppeal() {
    console.log("appealed");
  }
}
