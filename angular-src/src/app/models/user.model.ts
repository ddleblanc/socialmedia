import { Post } from "./post.model";

export class User {
  name: string;
  avatar: String;
  email: String;
  password: String;
  posts: Post[];
  username: String;
  _id: String;
  blurAgeRestrictedContent: boolean;
  showAgeRestrictedContent: boolean;
}
