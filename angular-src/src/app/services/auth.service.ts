import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../models/user.model";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";

const helper = new JwtHelperService();

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: User;
  // private localUrl = "http://localhost:3000/api/v1/";
  private localUrl = "api/v1/";

  constructor(private http: HttpClient) {}

  getUsers() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    console.log(headers);
    return this.http.get<User[]>(this.localUrl + "users", { headers: headers });
  }

  getUserByUsername(username) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.get<Response>(`${this.localUrl}users/${username}`, {
      headers: headers
    });
  }

  registerUser(user) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(this.localUrl + "users", user, {
      headers: headers
    });
  }
  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.localUrl + "auth", user, {
      headers: headers
    });
  }
  getProfile(username) {
    this.loadToken();
    let headers = new HttpHeaders().set("Authorization", this.authToken);
    headers.append("Authorization", this.authToken);
    headers.append("Content-Type", "application/json");
    console.log(headers);
    return this.http.get(`${this.localUrl}users/${username}`, {
      headers: headers
    });
  }

  updateAgeRestriction(showAgeRestrictedContent) {
    let headers = new HttpHeaders();
    let user = JSON.parse(localStorage.getItem("user"));
    let updateProps = {
      id: user.id,
      showAgeRestrictedContent: showAgeRestrictedContent
    };
    this.loadToken();
    headers.append("Authorization", this.authToken);
    headers.append("Content-Type", "application/json");
    return this.http.put(this.localUrl + "users", updateProps, {
      headers: headers
    });
  }
  deleteProfile(id) {
    // console.log(this.localUrl + 'users/profile/delete/' + id)
    let headers = new HttpHeaders();
    this.loadToken();
    // console.log(this.authToken);
    headers.append("Authorization", this.authToken);
    headers.append("Content-Type", "application/json");
    console.log(headers);
    return this.http.delete(this.localUrl + "users/profile/" + id, {
      headers: headers
    });
  }
  storeUserData(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }
  loggedIn() {
    return !helper.isTokenExpired(localStorage.getItem("id_token"));
  }
  logout() {
    localStorage.clear();
    this.authToken = null;
    this.user = null;
  }
}
