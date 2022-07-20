import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-france',
  templateUrl: './france.component.html',
  styleUrls: ['./france.component.scss']
})
export class FranceComponent implements OnInit {
  capital: string =''
  data = {
    title:'France',
    icon: 'france',
    population: '67 MLN'
  }
  constructor() { }

  ngOnInit(): void {

  }
  print(text:string){
    this.capital = text
  }
}
