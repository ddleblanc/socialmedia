import { MyComment } from "./comment.model";

export class Post {
  _id: string;
  title: string;
  story: string;
  photo: string;
  username: string;
  postDate: Date;
  comments: MyComment[];
}
