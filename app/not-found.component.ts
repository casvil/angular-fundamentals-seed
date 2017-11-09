import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>404. Page not found! <a routerLink="/">Go home?</a></div>
  `
})
export class NotFoundComponent {}
