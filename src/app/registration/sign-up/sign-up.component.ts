import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formGroup: FormGroup;
  showPassword: boolean;
  passwordStrength: string;

  // no dots at start nor end, no double dots, only letters, numbers, underscores and single dots
  readonly usernameRegEx = /^(?!\.)(?!.*\.$)(?!.*?\.\.)[a-zA-Z0-9_.]+$/;

  constructor() {}

  get email() { return this.formGroup.get('email'); }
  get username() { return this.formGroup.get('username'); }
  get password() { return this.formGroup.get('password'); }

  ngOnInit() {
    this.showPassword = false;
    this.formGroup = new FormGroup({
      email: new FormControl('', {validators: [ Validators.email], updateOn: 'blur'}),
      username: new FormControl('', {validators: [Validators.required, Validators.minLength(3), Validators.pattern(this.usernameRegEx)], updateOn: 'blur'}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(8)], updateOn: 'blur'}),
    });
  }

  onPasswordInputChange() {
    const inputValue = document.getElementById("password").value;
    this.passwordStrength = inputValue ? this.checkPasswordStrenght(inputValue) : undefined;
  }

  checkPasswordStrenght(password: string): string {
    let passwordStrength = 0;

    const uppercaseRegEx: RegExp = /[A-Z]/;
    const lowercaseRegEx: RegExp = /[a-z]/;
    const numberRegEx: RegExp = /[0-9]/;
    const specialCharactersRegEx: RegExp = /[!@#\$%\^\&*\)\(+=._-]/;

    if (password.length > 10) passwordStrength++;
    if (numberRegEx.test(password)) passwordStrength++;
    if (uppercaseRegEx.test(password)) passwordStrength++;
    if (lowercaseRegEx.test(password)) passwordStrength++;
    if (specialCharactersRegEx.test(password)) passwordStrength++;

    switch(passwordStrength) {
      case 1:
        return 'very weak'
      
      case 2:
        return 'weak'
      
      case 3:
        return 'medium strength'
      
      case 4:
        return 'strong'

      case 5:
        return 'very strong'
    }
  }

  signUp() {
    console.log(this.formGroup.value);
  }
}
