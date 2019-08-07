import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  // private likeAction = new Subject<boolean>();
  // likeAction$ = this.likeAction.asObservable();

  constructor() { }
}
