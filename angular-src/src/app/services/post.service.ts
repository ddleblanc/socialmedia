import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter } from "rxjs/operators";
// import { JwtHelperService } from '@auth0/angular-jwt'
import { Post } from "../models/post.model";
import { User } from "../models/user.model";
import { Response } from "../models/response.model";
// import { User } from '../_shared/models/user.model';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

// const helper = new JwtHelperService();
@Injectable({
  providedIn: "root"
})
export class PostService {
  private apiUrl = environment.apiUrl;

  currentPost: Post;
  currentUser: User;

  constructor(private http: HttpClient) { }

  private currentPostUrl = new Subject<string>();
  //Set current Post's photo url
  setCurrentPostUrl(url: string) {
    this.currentPostUrl.next(url);
  }
  // listen to changes in current Post's photo url
  currentPostUrlReceived$ = this.currentPostUrl.asObservable();

  posts$ = this.http.get<Post[]>(`${this.apiUrl}posts`);

  async getPost(_id) {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    return await this.http.get<Post>(`${this.apiUrl}posts/${_id}`, {
      headers: headers
    })
      .toPromise();
  }

  addPost(fd) {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    return this.http.post(this.apiUrl + "posts", fd, { headers: headers });
  }

  addCommentToPost(id, comment) {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    return this.http.put(
      this.apiUrl + "posts" + "/" + id + "/comments",
      comment,
      { headers: headers }
    );
  }

  deletePost(_id) {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    return this.http.delete<Response>(this.apiUrl + "posts" + "/" + _id, {
      headers: headers
    });
  }

  editPost(_id, fd) {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    return this.http.put(this.apiUrl + "posts" + "/" + _id, fd, {
      headers: headers
    });
  }

  addLikeToPost(postId, userId) {
    console.log("dit is de body: " + JSON.stringify(userId))
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    return this.http.post(`${this.apiUrl}posts/${postId}/likes`, userId, { headers: headers });
  }

  removeLikeFromPost(postId, userId) {
    console.log("dit is de body: " + userId)
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    return this.http.put(`${this.apiUrl}posts/${postId}/likes`, userId, { headers: headers });
  }
}
