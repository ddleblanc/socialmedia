import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "portraits";
  public screenWidth;

  update: boolean = false;


  constructor(updates: SwUpdate, public router: Router) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;

  }
  isAccountRoute(value: string): boolean {
    return /^\/account(\/|$)/.test(value);
  }
}
