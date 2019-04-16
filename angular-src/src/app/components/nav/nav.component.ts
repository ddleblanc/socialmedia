import { Component, OnInit, HostListener, Input } from "@angular/core";
import { Router } from "@angular/router";
import { trigger, transition, style, animate } from "@angular/animations";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  animations: [
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
    trigger("navEnterAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(-60px)" }),
        animate(
          "420ms ease-in-out",
          style({ opacity: 1, transform: "translateY(0px)" })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1, transform: "translateY(0px)" }),
        animate(
          "220ms ease-in-out",
          style({ opacity: 0, transform: "translateY(-60px)" })
        )
      ])
    ]),
    trigger("navImgAnimation", [
      transition(":enter", [
        style({ transform: "translateY(0px)", opacity: 0 }),
        animate(
          "720ms ease-in-out",
          style({ transform: "translateY(0px)", opacity: 0.2 })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateY(0px)", opacity: 1 }),
        animate("50ms", style({ transform: "translateY(0px)", opacity: 0 }))
      ])
    ]),
    trigger("navLinkAnimation1", [
      transition(":enter", [
        style({ transform: "translateY(-10px)", opacity: 0 }),
        animate(
          "220ms 200ms ease-in-out",
          style({ transform: "translateY(0px)", opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateY(0px)", opacity: 1 }),
        animate("420ms", style({ transform: "translateY(-10px)", opacity: 0 }))
      ])
    ]),
    trigger("navLinkAnimation2", [
      transition(":enter", [
        style({ transform: "translateY(-10px)", opacity: 0 }),
        animate(
          "220ms 300ms ease-in-out",
          style({ transform: "translateY(0px)", opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateY(0px)", opacity: 1 }),
        animate("420ms", style({ transform: "translateY(-10px)", opacity: 0 }))
      ])
    ]),
    trigger("navLinkAnimation3", [
      transition(":enter", [
        style({ transform: "translateY(-10px)", opacity: 0 }),
        animate(
          "220ms 400ms ease-in-out",
          style({ transform: "translateX(0px)", opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateX(0px)", opacity: 1 }),
        animate("420ms", style({ transform: "translateY(-10px)", opacity: 0 }))
      ])
    ]),
    trigger("navLinkAnimation4", [
      transition(":enter", [
        style({ transform: "translateY(-10px)", opacity: 0 }),
        animate(
          "220ms 500ms ease-in-out",
          style({ transform: "translateX(0px)", opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateX(0px)", opacity: 1 }),
        animate("420ms", style({ transform: "translateY(-10px)", opacity: 0 }))
      ])
    ]),
    trigger("navLinkAnimation5", [
      transition(":enter", [
        style({ transform: "translateY(100px)", opacity: 0 }),
        animate(
          "420ms 600ms ease-in-out",
          style({ transform: "translateX(0px)", opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateX(0px)", opacity: 1 }),
        animate("420ms", style({ transform: "translateY(100px)", opacity: 0 }))
      ])
    ])
  ]
})
export class NavComponent implements OnInit {
  @Input() showNav;
  screenWidth: number;
  navOpen: boolean = false;
  bgImages: string[] = [
    "../../../assets/matrix.jpeg",
    "../../../assets/matrix.jpeg",
    "../../../assets/matrix.jpeg",
    "../../../assets/matrix.jpeg"
  ];
  bgIndex: number = 0;
  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  @HostListener("window:resize", ["$event"])
  getScreenSize(event?) {
    // this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
    if (this.screenWidth > 768) {
      this.navOpen = false;
    }
  }

  openNav() {
    this.navOpen = !this.navOpen;
    if (this.navOpen) {
      if (this.bgIndex > this.bgImages.length - 2) {
        this.bgIndex = 0;
      } else {
        this.bgIndex++;
        console.log(this.bgIndex);
      }
    }
  }
  onRouterLinkClicked() {
    // this.openNav();
  }
}
