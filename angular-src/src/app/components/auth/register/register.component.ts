import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { trigger, style, animate, transition } from "@angular/animations";
import { ValidationService } from "src/app/services/validation.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("500ms ease-in-out", style({ opacity: 1 }))
      ])
      // transition(":leave", [
      //   style({ transform: "translateX(0)", opacity: 1 }),
      //   animate("500ms", style({ transform: "translateX(100%)", opacity: 0 }))
      // ])
    ])
  ]
})
export class RegisterComponent implements OnInit {
  placeholderImg;
  username: String;
  email: String;
  password: String;
  agreement: boolean = false;
  avatar: File = null;
  url: String;
  data: any;
  bgImages = [
    "../../../../assets/bg/photo1.jpeg",
    "../../../../assets/bg/photo2.jpeg",
    "../../../../assets/bg/photo3.jpeg",
    "../../../../assets/bg/photo4.jpeg",
    "../../../../assets/bg/photo5.jpeg"
  ];

  // Get the HTML Elements to add validation classes to them
  @ViewChild("inputPassword", { read: ElementRef }) inputPassword: ElementRef;
  @ViewChild("inputEmail", { read: ElementRef }) inputEmail: ElementRef;

  constructor(
    private validationService: ValidationService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    let pickedImg = Math.floor(Math.random() * this.bgImages.length);
    this.placeholderImg = this.bgImages[pickedImg];
  }

  // Replace placeholder image with uploaded avatar (preview)
  onFileSelected(event) {
    this.avatar = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }

  onEmailEntered() {
    // Validation email
    if (!this.validationService.validateEmail(this.email)) {
      this.inputEmail.nativeElement.classList.add("invalid");
      console.log("Invalid email");
    } else {
      this.inputEmail.nativeElement.classList.remove("invalid");
    }
  }

  onPasswordEntered() {
    if (!this.validationService.validatePassword(this.password)) {
      this.inputPassword.nativeElement.classList.add("invalid");
      console.log("Invalid password");
    } else {
      this.inputPassword.nativeElement.classList.remove("invalid");
    }
  }

  onRegisterSubmit() {
    // same format as multipart/form-data
    const fd = new FormData();
    const user = {
      username: this.username.toLocaleLowerCase(),
      email: this.email,
      password: this.password
    };

    // Required fields
    if (!this.validationService.validateRegister(user)) {
      // this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      console.log("Fill in all fields");
      return false;
    }
    // Validation email
    if (!this.validationService.validateEmail(user.email)) {
      // this.flashMessage.show('Please enter a valid email', {cssClass: 'alert-danger', timeout: 3000});
      console.log("Invalid email");
      return false;
    }
    // Validation password
    if (!this.validationService.validatePassword(user.password)) {
      // this.flashMessage.show('Please enter a valid password', {cssClass: 'alert-danger', timeout: 3000});
      console.log("Invalidpassword");
      return false;
    }
    //Validation agreement
    if (this.agreement == false) {
      // this.flashMessage.show('You will behave!', {cssClass: 'alert-danger', timeout: 3000});
      console.log("You must behave");
      return false;
    }
    // Validation avatar
    if (this.avatar !== null) {
      if (!this.validationService.validateAvatar(this.avatar.name)) {
        // this.flashMessage.show('Only images allowed', {cssClass: 'alert-danger', timeout: 3000});
        console.log("Invalid file");
        return false;
      }
      // Append avatar to FormData
      fd.append("avatar", this.avatar, this.avatar.name);
    }

    // Append user to FormData
    fd.append("user", JSON.stringify(user));

    //Register user
    this.authService.registerUser(fd).subscribe(data => {
      this.data = data;
      if (this.data.success) {
        // this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(["/login"]);
      } else {
        // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(["/register"]);
      }
    });
  }
}
