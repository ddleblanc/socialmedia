import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { Router, ActivatedRoute } from "@angular/router";
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from "@angular/animations";
import { PostService } from "src/app/services/post.service";
import { Post } from "src/app/models/post.model";

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
    ]),
    trigger("itemEnterAnimation", [
      transition("* => *", [
        // each time the binding value changes
        query(
          ":enter",
          [
            style({ transform: "scale(0.8)", opacity: 0 }),
            stagger(100, [
              animate("220ms", style({ transform: "scale(1) ", opacity: 1 }))
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      for (var i = 0; i < this.posts.length; i++) {
        this.posts[i].photo = `../../../assets/${posts[i].photo}`;
      }
    });
  }
  onPostSelected(post) {
    this.router.navigate(['post', post._id]), { relativeTo: this.route }
  }
}
