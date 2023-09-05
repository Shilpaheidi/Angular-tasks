import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting-form',
  templateUrl: './greeting-form.component.html',
  styleUrls: ['./greeting-form.component.scss']
})
export class GreetingFormComponent {
name:string = '';
submitted:boolean = false;

submitForm(){
  this.submitted = true;
}
}
