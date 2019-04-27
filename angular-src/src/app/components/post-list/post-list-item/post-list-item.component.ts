import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor(public router: Router, private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
  }
  onPostSelected(post) {
    this.postService.setCurrentPostUrl(post.photo)
    setTimeout(() => {
      this.router.navigate(['post', post._id]), { relativeTo: this.route }
    }, 420)

  }
}
