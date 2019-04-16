import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-src";

  update: boolean = false;
  joke: any;

  constructor(updates: SwUpdate, public router: Router) {
    updates.available.subscribe(event => {
      //this.update = true;
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    // this.data.gimmeJokes().subscribe(res => {
    //   this.joke = res;
    // })
  }
}
