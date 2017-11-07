import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;
  isHappy: boolean = true;
  numberOne: number = 1;
  numberTwo: number = 2;
  name: string = 'David';

  constructor() {
    this.title = 'Ultimate Angular'
  }
}
