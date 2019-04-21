import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { Post } from 'src/app/models/post.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  private _post: Post;
  @Input()
  set post(post: Post) {
    this._post = post;
    this.comments = post.comments;
  }
  get post(): Post { return this._post; }

  // TODO emit event that closed the comment section when swiped down && top reached 

  comments;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.comments = this._post.comments;
  }

  onUserSelected(username) {
    this.router.navigate(['user', username]), { relativeTo: this.route }
  }

}
