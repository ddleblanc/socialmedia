import { MyComment } from "./comment.model";

export class Post {
  _id: string;
  title: string;
  story: string;
  photo: string;
  username: string;
  user: any;
  postDate: Date;
  comments: MyComment[];
}
