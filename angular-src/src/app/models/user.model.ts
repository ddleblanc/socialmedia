import { Post } from "./post.model";

export class User {
  name: string;
  avatar: string;
  email: string;
  password: string;
  posts: Post[];
  username: string;
  _id: string;
  id: string;
  blurAgeRestrictedContent: boolean;
  showAgeRestrictedContent: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
