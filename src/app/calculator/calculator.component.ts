import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  //Initialise the display, memory and operator variable
  displayFinalAnswer = 0;
  holder = 0;
  operator = '';

  ngOnInit(): void {

  }
  //the clear button return the display to 0
  clearButton() {
    this.displayFinalAnswer = 0;
  }

  //create function for add, minus, divide, multiply
  addButton() {
    this.holder = Number(this.displayFinalAnswer);
    this.displayFinalAnswer = 0;
    this.operator = '+';
  }
  minusButton() {
    this.holder = Number(this.displayFinalAnswer);
    this.displayFinalAnswer = 0;
    this.operator = '-';
  }
  multiplyButton() {
    this.holder = Number(this.displayFinalAnswer);
    this.displayFinalAnswer = 0;
    this.operator = '*';
  }
  divideButton() {
    this.holder = Number(this.displayFinalAnswer);
    this.displayFinalAnswer = 0;
    this.operator = '/';
  }

  //write function that displays numbers
  button(evt: any) {
    if (this.displayFinalAnswer > 0) {
      this.displayFinalAnswer = this.displayFinalAnswer + evt.target.innerHTML;
    } else if (this.displayFinalAnswer.toString().includes('.')) {
      this.displayFinalAnswer = this.displayFinalAnswer + evt.target.innerHTML;
    } else {
      this.displayFinalAnswer = evt.target.innerHTML;
    }
  }

  //create decimal function
  decimalButton(evt: any) {
    if (!(this.displayFinalAnswer.toString().includes('.'))) {
      this.displayFinalAnswer = this.displayFinalAnswer + evt.target.innerHTML;
    } else if (this.displayFinalAnswer.toString().includes('.')) {
      this.displayFinalAnswer = this.displayFinalAnswer + 0;
    }
  }

  //create equals function
  equalsButton() {
    if (this.operator === '+') {
      let total = Number(this.holder) + Number(this.displayFinalAnswer);
      this.displayFinalAnswer = total;
    } else if (this.operator === '-') {
      let total = Number(this.holder) - Number(this.displayFinalAnswer);
      this.displayFinalAnswer = total;
    } else if (this.operator === '*') {
      let total = Number(this.holder) * Number(this.displayFinalAnswer);
      this.displayFinalAnswer = total;
    } else if (this.operator === '/') {
      let total = Number(this.holder) / Number(this.displayFinalAnswer);
      this.displayFinalAnswer = total;
    }
  }
}
