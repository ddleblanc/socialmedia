import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  animations: [
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
export class PostListComponent implements OnInit {

  @Input() posts;

  constructor(public router: Router) { }

  ngOnInit() {
    // for (var i = 0; i < this.posts.length; i++) {
    //   this.posts[i].photo = `../../../assets/${this.posts[i].photo}`;
    // }
  }

}
