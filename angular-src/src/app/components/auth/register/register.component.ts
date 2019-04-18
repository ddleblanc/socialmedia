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
import { User } from "src/app/models/user.model";

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
  user: User;
  placeholderImg;
  username: String;
  email: String;
  password: String;
  imagename: string;
  imagedata: string | ArrayBuffer;
  url: string;
  data: any;
  isEmailValid: boolean;
  isUsernameValid: boolean;
  isPasswordValid: boolean;

  // Get the HTML Elements to add validation classes to them
  @ViewChild("inputPassword", { read: ElementRef }) inputPassword: ElementRef;
  @ViewChild("inputEmail", { read: ElementRef }) inputEmail: ElementRef;
  @ViewChild("inputUsername", { read: ElementRef }) inputUsername: ElementRef;

  constructor(
    private validationService: ValidationService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

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

  removeInvalidClass(event) {
    let type = event.target.type;
    switch (type) {
      case "text":
        this.inputUsername.nativeElement.classList.remove("invalid");
        break;
      case "email":
        this.inputEmail.nativeElement.classList.remove("invalid");
        break;
      case "password":
        this.inputPassword.nativeElement.classList.remove("invalid");
        break;
      default:
      // code block
    }
    console.log(event.target.type);
  }

  onUsernameEntered() {
    // Validate username
    if (!this.validationService.validateUsername(this.username)) {
      this.inputUsername.nativeElement.classList.add("invalid");
      this.isUsernameValid = false;
      console.log("Invalid username");
    } else {
      this.inputUsername.nativeElement.classList.remove("invalid");
      this.isUsernameValid = true;
    }
  }

  onEmailEntered() {
    // Validate email
    if (!this.validationService.validateEmail(this.email)) {
      this.inputEmail.nativeElement.classList.add("invalid");
      this.isEmailValid = false;
      console.log("Invalid email");
    } else {
      this.inputEmail.nativeElement.classList.remove("invalid");
      this.isEmailValid = true;
    }
  }

  onPasswordEntered() {
    // Validate password
    if (!this.validationService.validatePassword(this.password)) {
      this.inputPassword.nativeElement.classList.add("invalid");
      this.isPasswordValid = false;
      console.log("Invalid password");
    } else {
      this.inputPassword.nativeElement.classList.remove("invalid");
      this.isPasswordValid = true;
    }
  }

  onRegisterSubmit() {
    // same format as multipart/form-data

    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
      avatar: { name: this.imagename, data: this.imagedata },
      wallpaper: { name: this.imagename, data: this.imagedata }
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
    // Validation avatar
    if (this.imagename !== null && this.imagedata !== null) {
      if (!this.validationService.validateAvatar(this.imagename)) {
        // this.flashMessage.show('Only images allowed', {cssClass: 'alert-danger', timeout: 3000});
        console.log(`Invalid file ${this.imagename}`);
        return false;
      }
    }

    let jsonSize = Object.keys(user).length;
    console.log(jsonSize);

    //Register user
    this.authService.registerUser(user).subscribe(data => {
      this.data = data;
      if (this.data.success) {
        // this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.authService.authenticateUser(user);
        this.router.navigate(["/"]);
      } else {
        // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(["/register"]);
      }
    });
  }
}
