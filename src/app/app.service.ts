import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
  public subject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public observable: Observable<number> = this.subject.asObservable();
}