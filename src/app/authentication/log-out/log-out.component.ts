import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  readonly iconClassBase = 'fas fa-4x fa-'

  iconClass: string;
  iconClassOptions = [
    'apple-alt', 'bacon', 'bone', 'bread-slice', 'candy-cane', 'carrot', 'cheese', 'cookie', 'drumstick-bite',
    'egg', 'fish', 'hamburger', 'hotdog', 'ice-cream', 'lemon', 'pepper-hot', 'pizza-slice', 'stroopwafel'
  ];

  constructor() { }

  getRandomIconClass() {
    this.iconClass = this.iconClassBase + this.iconClassOptions[Math.floor(Math.random() * this.iconClassOptions.length)];
    console.log(this.iconClass);
  }

  onIconClick() {
    this.getRandomIconClass();
  }

  ngOnInit() {
    this.getRandomIconClass();
  }

}
