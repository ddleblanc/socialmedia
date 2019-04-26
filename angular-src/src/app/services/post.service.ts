import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter } from "rxjs/operators";
// import { JwtHelperService } from '@auth0/angular-jwt'
import { Post } from "../models/post.model";
import { User } from "../models/user.model";
// import { User } from '../_shared/models/user.model';
import { environment } from '../../environments/environment';

// const helper = new JwtHelperService();
@Injectable({
  providedIn: "root"
})
export class PostService {
  private apiUrl = environment.apiUrl;
  currentPost: Post;
  currentUser: User;

  constructor(private http: HttpClient) { }



  addPost(fd) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + "posts", fd, { headers: headers });
  }

  addCommentToPost(id, comment) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.put(
      this.apiUrl + "posts" + "/" + id + "/comments",
      comment,
      { headers: headers }
    );
  }

  deletePost(_id) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.apiUrl + "posts" + "/" + _id, {
      headers: headers
    });
  }

  async getPost(_id) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return await this.http.get<Post>(`${this.apiUrl}posts/${_id}`, {
      headers: headers
    })
      .toPromise();
  }

  editPost(_id, fd) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.put(this.apiUrl + "posts" + "/" + _id, fd, {
      headers: headers
    });
  }

  getPosts() {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.get<Post[]>(`${this.apiUrl}posts`, { headers: headers });
  }

  addLikeToPost(postId, userId) {
    console.log("dit is de body: " + JSON.stringify(userId))
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.apiUrl}posts/${postId}/likes`, userId, { headers: headers });
  }

  removeLikeFromPost(postId, userId) {
    console.log("dit is de body: " + userId)
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.apiUrl}posts/${postId}/likes`, userId, { headers: headers });
  }



}
