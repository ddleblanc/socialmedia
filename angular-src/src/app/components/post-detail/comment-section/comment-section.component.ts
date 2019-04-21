import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { Post } from 'src/app/models/post.model';

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

  constructor() { }

  ngOnInit() {
    this.comments = this._post.comments;
  }

}
