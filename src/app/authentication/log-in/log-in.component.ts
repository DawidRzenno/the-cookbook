import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  formGroup: FormGroup;
  showPassword: boolean;

  constructor() {
    this.showPassword = false;
    this.formGroup = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
      rememberMe: new FormControl(false),
    });
  }

  logIn(){
    console.log(this.formGroup.value);
  }

  ngOnInit() {
  }

}
