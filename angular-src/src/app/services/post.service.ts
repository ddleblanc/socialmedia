import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter } from "rxjs/operators";
// import { JwtHelperService } from '@auth0/angular-jwt'
import { Post } from "../models/post.model";
import { User } from "../models/user.model";
// import { User } from '../_shared/models/user.model';

// const helper = new JwtHelperService();
@Injectable({
  providedIn: "root"
})
export class PostService {
  private currentPost_id: string;
  private localUrl = "http://localhost:3000/api/v1/";
  // private localUrl = "api/v1/";
  currentPost: Post;
  currentUser: User;
  // private localUrl = '';
  // private user: User;

  constructor(private http: HttpClient) { }

  setCurrentPostId(id: string) {
    this.currentPost_id = id;
  }

  addPost(fd) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(this.localUrl + "posts", fd, { headers: headers });
  }

  addCommentToPost(id, comment) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(
      this.localUrl + "posts" + "/" + id + "/comments",
      comment,
      { headers: headers }
    );
  }

  deletePost(_id) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.localUrl + "posts" + "/" + _id, {
      headers: headers
    });
  }
  setCurrentPost(post) {
    this.currentPost = post;
  }
  getCurrentPost() {
    return this.currentPost;
  }
  setCurrentUser(user) {
    this.currentUser = user;
  }
  getCurrentUser() {
    return this.currentUser;
  }
  resetCurrents() {
    this.currentPost = null;
    this.currentUser = null;
  }

  async getPost(_id) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return await this.http.get<Post>(`${this.localUrl}posts/${_id}`, {
      headers: headers
    })
      .toPromise();
  }

  editPost(_id, fd) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.put(this.localUrl + "posts" + "/" + _id, fd, {
      headers: headers
    });
  }

  getPosts() {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.get<Post[]>(`${this.localUrl}posts`, { headers: headers });
  }

  getUsers() {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.get(this.localUrl + "users", { headers: headers });
  }

  getModelByUsername(username) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.get(this.localUrl + "users/model/" + username, {
      headers: headers
    });
  }

  getPostsBySubject(subject) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.get(this.localUrl + "posts" + "/subject/" + subject, {
      headers: headers
    });
  }

  // getPostsFromUser(){
  //   // this.user = JSON.parse(localStorage.getItem('user')) ;
  //   // console.log(this.user.id)
  //   let headers = new HttpHeaders();
  //   // headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');
  //   // let options = new RequestOptions({ headers: headers });
  //   return this.http.get(this.localUrl + 'posts' + "/photographer/" + this.user.id, {headers: headers})
  // }

  getPostsByPhotographer(id) {
    // console.log(this.user.id)
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.get(this.localUrl + "posts" + "/photographer/" + id, {
      headers: headers
    });
  }
}
