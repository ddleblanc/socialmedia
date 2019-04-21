import { User } from './user.model';

export class MyComment {
    _id: string;
    comment: string;
    createdAt: Date;
    likes: [];
    replies: [];
    user: User;

}