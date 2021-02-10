import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cause-and-effect',
  templateUrl: './cause-and-effect.component.html',
  styleUrls: ['./cause-and-effect.component.scss']
})
export class CauseAndEffectComponent implements OnInit {

  data = {
    'Nass/21/04': {'Name' : 'Anthony', 'Age': 29, 'Status': 'Positive', 'Dead': true},
    'Nass/21/03': {'Name' : 'Uche', 'Age': 30, 'Status': 'Positive', 'Dead': false},
    'Nass/21/02': {'Name' : 'Tega', 'Age': 35, 'Status': 'Positive', 'Dead': false},
    'Nass/21/01': {'Name' : 'Sharon', 'Age': 15, 'Status': 'Negative', 'Dead': true}
}
  buttonClick = false;
  str = '';


  showDetails() {
    this.buttonClick = true;
    
    var value = (<HTMLInputElement>event.target).innerText;
    this.str = this.data[value]
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
