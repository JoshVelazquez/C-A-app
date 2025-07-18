import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
private subject = new Subject<boolean>();
  constructor() {}

  show() {
    this.subject.next(true);
  }

  hide() {
    this.subject.next(false);
  }

  get getState() {
    return this.subject;
  }
}
