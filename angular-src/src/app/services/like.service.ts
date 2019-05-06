import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private likeAction = new Subject<boolean>();
  likeAction$ = this.likeAction.asObservable();

  constructor() { }
}
