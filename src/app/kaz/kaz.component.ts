import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kaz',
  templateUrl: './kaz.component.html',
  styleUrls: ['./kaz.component.scss']
})
export class KazComponent implements OnInit {
  data = {
    title:'Kazakhstan',
    icon: 'kaz',
    population: '20 MLN'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
