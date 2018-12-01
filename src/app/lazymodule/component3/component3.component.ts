import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  private data: number;
  constructor(private _dummyService: DummyService) {
    this.data = _dummyService.getCount();
  }

  ngOnInit() {
  }

  inc() {
      this.data = this._dummyService.increaseCount();
  }

  dec() {
      this.data = this._dummyService.decreaseCount();
  }
}
