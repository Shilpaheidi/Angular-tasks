import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    password: '',
  };
  constructor(private ngForm: NgForm) {}
  confirmPassword = '';
  registrationSuccess=false;

  registerUser(){
    this.registrationSuccess = true;
  }
}

