import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  num1!: number;
  num2!: number;
  result!: any;
  errorMessage!: string;

  add() {
   this.result= this.num1 + this.num2;
    this.errorMessage = '';
  }

  subtract() {
    this.result=  this.num1 - this.num2;
    this.errorMessage = '';
  }

  multiply() {
    this.result=this.num1 * this.num2;
    this.errorMessage = '';
  }

  divide() {
    if (this.num2 === 0) {
      this.result = null;
      this.errorMessage = 'cannot divide by zero';
    } else {
      this.result = this.num1 / this.num2;
      this.errorMessage = '';
    }
  }
}
