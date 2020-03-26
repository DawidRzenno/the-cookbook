import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

class PasswordStrength {
  level: number;
  levelDescription: string;
  levelStyleClass: string;

  constructor() {
    this.level = 0;
    this.levelDescription = '';
    this.levelStyleClass = '';
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formGroup: FormGroup;
  showPassword: boolean;
  passwordStrength: PasswordStrength;

  // no dots at start nor end, no double dots, only letters, numbers, underscores and single dots
  readonly usernameRegEx = /^(?!\.)(?!.*\.$)(?!.*?\.\.)[a-zA-Z0-9_.]+$/;

  constructor() {}

  get email() { return this.formGroup.get('email'); }
  get username() { return this.formGroup.get('username'); }
  get password() { return this.formGroup.get('password'); }

  ngOnInit() {
    this.showPassword = false;
    this.formGroup = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email], updateOn: 'blur'}),
      username: new FormControl('', {validators: [Validators.required, Validators.minLength(3), Validators.pattern(this.usernameRegEx)], updateOn: 'blur'}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(8)], updateOn: 'blur'}),
    });
  }

  onPasswordInputChange() {
    const inputValue = (<HTMLInputElement> document.getElementById("password")).value;
    this.passwordStrength = inputValue ? this.checkPasswordStrenght(inputValue) : undefined;
  }

  checkPasswordStrenght(password: string): PasswordStrength {
    let passwordStrength = new PasswordStrength();

    const uppercaseRegEx: RegExp = /[A-Z]/;
    const lowercaseRegEx: RegExp = /[a-z]/;
    const numberRegEx: RegExp = /[0-9]/;
    const specialCharactersRegEx: RegExp = /[!@#\$%\^\&*\)\(+=._-]/;

    // 1-7 scale 
    if (password.length > 8) passwordStrength.level++; 
    if (password.length > 10) passwordStrength.level++;
    if (password.length > 12) passwordStrength.level++;
    if (numberRegEx.test(password)) passwordStrength.level++;
    if (uppercaseRegEx.test(password)) passwordStrength.level++;
    if (lowercaseRegEx.test(password)) passwordStrength.level++;
    if (specialCharactersRegEx.test(password)) passwordStrength.level++;

    const baseStyle = 'password-strength--'

    if (passwordStrength.level < 2) { // for 0, 1
      passwordStrength.levelDescription = 'very weak'   
      passwordStrength.levelStyleClass = baseStyle + 'very-weak'

    } else if (passwordStrength.level < 3) { // for 2
      passwordStrength.levelDescription = 'weak'        
      passwordStrength.levelStyleClass = baseStyle + 'weak'

    } else if (passwordStrength.level < 5) { // for 3, 4
      passwordStrength.levelDescription = 'medium'      
      passwordStrength.levelStyleClass = baseStyle + 'medium'

    } else if (passwordStrength.level < 6) { // for 5
      passwordStrength.levelDescription = 'strong'   
      passwordStrength.levelStyleClass = baseStyle + 'strong'

    } else { // for 6, 7
      passwordStrength.levelDescription = 'very strong' 
      passwordStrength.levelStyleClass = baseStyle + 'very-strong'
    }

    return passwordStrength;
  }

  signUp() {
    console.log(this.formGroup.value);
  }
}
