import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
@Input() data:any;
@Output() getCapital = new EventEmitter()
capital = 'Paris'
class:string =''
  constructor() { }
  ngOnInit(): void {
}
  sendCapital(){
    this.getCapital.emit(this.capital)
  }
}
