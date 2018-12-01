import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  counter: number = 0;
  numCounter: Observable<number>;
  constructor() { 
    this.numCounter = new Observable<number>();
  }

  increaseCount(): number {
    this.counter ++;
    return this.getCount();
  }

  decreaseCount(): number {
    this.counter --;
    return this.getCount();
  }

  getCount() {
    return this.counter;
  }

}
