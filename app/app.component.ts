import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string = 'David';

  handleChange(value: string) {
    this.name = value;
  }

  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  },
  {
    id: 2,
    fullname: 'Michael',
    checkedIn: false
  },
  {
    id: 3,
    fullname: 'David',
    checkedIn: true
  }];
}
