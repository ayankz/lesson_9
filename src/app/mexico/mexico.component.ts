import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mexico',
  templateUrl: './mexico.component.html',
  styleUrls: ['./mexico.component.scss']
})
export class MexicoComponent implements OnInit {
  data = {
    title:'Mexico',
    icon: 'mex',
    population: '40 MLN'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
