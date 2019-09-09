import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter } from "rxjs/operators";
// import { JwtHelperService } from '@auth0/angular-jwt'
import { Post } from "../models/post.model";
import { User } from "../models/user.model";
import { environment } from "../../environments/environment";
// import { User } from '../_shared/models/user.model';

// const helper = new JwtHelperService();
@Injectable({
  providedIn: "root"
})
export class CommentService {
  private currentPost_id: string;
  private apiUrl = `${environment.apiUrl}comments/`;
  currentPost: Post;
  currentUser: User;

  constructor(private http: HttpClient) {}

  setCurrentPostId(id: string) {
    this.currentPost_id = id;
  }

  addLikeToComment(commentId, userId) {
    console.log("dit is de body: " + userId);
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    return this.http.post(`${this.apiUrl}${commentId}`, userId, {
      headers: headers
    });
  }

  removeLikeFromComment(commentId, userId) {
    console.log("dit is de body: " + userId);
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    return this.http.put(`${this.apiUrl}${commentId}`, userId, {
      headers: headers
    });
  }

  removeCommentById(_id) {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    return this.http.delete(`${this.apiUrl}${_id}`, {
      headers: headers
    });
  }
}
