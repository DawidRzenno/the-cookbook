import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  currentLocation: string = window.location.href;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentLocation = window.location.href;
    });
  }

  displayPreviousPage() {
    window.history.back();
  }
}
