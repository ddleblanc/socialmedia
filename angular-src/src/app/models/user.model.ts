import { Post } from "./post.model";

export class User {
  name: string;
  avatar: {
    imagename: string;
    // Base64 string representing the binary image
    data: string;
  };
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
