import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cause-and-effect',
  templateUrl: './cause-and-effect.component.html',
  styleUrls: ['./cause-and-effect.component.scss']
})
export class CauseAndEffectComponent implements OnInit {

  //Create data object collection 
  data = {
    'Nass/21/04': {'Name' : 'Anthony', 'Age': 29, 'Status': 'Positive', 'Dead': true},
    'Nass/21/03': {'Name' : 'Uche', 'Age': 30, 'Status': 'Positive', 'Dead': false},
    'Nass/21/02': {'Name' : 'Tega', 'Age': 35, 'Status': 'Positive', 'Dead': false},
    'Nass/21/01': {'Name' : 'Sharon', 'Age': 15, 'Status': 'Negative', 'Dead': true}
}

  //set div display to false and initialise string value
  buttonClick = false;
  str = '';

  //create function to show details of each candidate
  showDetails() {
    this.buttonClick = true;                                 //set div display to true
    var value = (<HTMLInputElement>event.target).innerText;  //create variable to take the inner text of the <a>
    this.str = this.data[value]                              //populate str variable with data object[key]
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
