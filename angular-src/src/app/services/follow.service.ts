import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter } from "rxjs/operators";
// import { JwtHelperService } from '@auth0/angular-jwt'
import { Post } from "../models/post.model";
import { User } from "../models/user.model";
import { environment } from '../../environments/environment';
// import { User } from '../_shared/models/user.model';

// const helper = new JwtHelperService();
@Injectable({
  providedIn: "root"
})
export class FollowService {
  private currentPost_id: string;
  // private apiUrl = "http://localhost:3000/api/v1/comments/";
  private apiUrl = environment.apiUrl;
  currentPost: Post;
  currentUser: User;
  // private apiUrl = '';
  // private user: User;

  constructor(private http: HttpClient) { }

  setCurrentPostId(id: string) {
    this.currentPost_id = id;
  }


  addUserToFollowing(theirId, userId) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'users/' + theirId + '/follow', userId, { headers: headers });
  }

  removeUserFromFollowing(theirId, userId) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.put(this.apiUrl + 'users/' + theirId + '/follow', userId, { headers: headers });
  }

}
