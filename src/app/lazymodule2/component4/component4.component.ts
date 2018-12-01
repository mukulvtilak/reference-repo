import { Component, OnInit } from "@angular/core";
import { DummyService } from 'src/app/services/dummy.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-component4',
    templateUrl:'./component4.component.html',
    styleUrls:['./component4.component.css']
})
export class Component4Component implements OnInit{
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