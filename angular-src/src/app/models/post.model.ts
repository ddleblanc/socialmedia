export class Post {
  _id: string;
  title: string;
  story: string;
  photo: {
    name: string;
    data: string;
  };
  username: string;
  postDate: Date;
}
