import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { Router } from "@angular/router";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("500ms ease-in-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("500ms", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  users: User[];
  urls = [
    "https://images.pexels.com/photos/2096603/pexels-photo-2096603.jpeg?cs=srgb&dl=aerial-photography-buildings-city-2096603.jpg&fm=jpg",
    "https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?cs=srgb&dl=aerial-photography-aerial-shot-australia-2097616.jpg&fm=jpg",
    "https://images.pexels.com/photos/2086620/pexels-photo-2086620.jpeg?cs=srgb&dl=black-and-white-clouds-cold-2086620.jpg&fm=jpg",
    "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2096603/pexels-photo-2096603.jpeg?cs=srgb&dl=aerial-photography-buildings-city-2096603.jpg&fm=jpg",
    "https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?cs=srgb&dl=aerial-photography-aerial-shot-australia-2097616.jpg&fm=jpg",
    "https://images.pexels.com/photos/2086620/pexels-photo-2086620.jpeg?cs=srgb&dl=black-and-white-clouds-cold-2086620.jpg&fm=jpg",
    "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2096603/pexels-photo-2096603.jpeg?cs=srgb&dl=aerial-photography-buildings-city-2096603.jpg&fm=jpg",
    "https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?cs=srgb&dl=aerial-photography-aerial-shot-australia-2097616.jpg&fm=jpg",
    "https://images.pexels.com/photos/2086620/pexels-photo-2086620.jpeg?cs=srgb&dl=black-and-white-clouds-cold-2086620.jpg&fm=jpg",
    "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUsers().subscribe(users => (this.users = users));
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
