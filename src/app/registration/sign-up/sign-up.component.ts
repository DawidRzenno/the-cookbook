import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formGroup: FormGroup;
  showPassword: boolean;
  error: boolean;

  constructor() {
    this.showPassword = false;
    this.formGroup = new FormGroup({
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  signUp(){
    console.log(this.formGroup.value);
  }

  ngOnInit() {
  }

}
