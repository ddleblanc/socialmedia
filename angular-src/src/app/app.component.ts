import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { Router } from "@angular/router";
import { PostService } from './services/post.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "portraits";
  public screenWidth;
  public currentPostUrl: string;
  update: boolean = false;


  constructor(updates: SwUpdate, public router: Router, private postService: PostService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.postService.currentPostUrlReceived$.subscribe(url => {
      this.currentPostUrl = url
      console.log("YEAAAAH BWOOOY " + this.currentPostUrl)
    })

  }
  isAccountRoute(value: string): boolean {
    return /^\/account(\/|$)/.test(value);
  }
  isPostRoute(value: string): boolean {
    return /^\/post(\/|$)/.test(value);
  }
}
