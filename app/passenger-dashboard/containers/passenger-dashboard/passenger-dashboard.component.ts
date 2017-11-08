import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/index';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count></passenger-count>
      <passenger-detail></passenger-detail>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span
            class="status"
            [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <div class="date">
            Check in date:
            {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() {}
  ngOnInit() {
    this.passengers = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkedInDate: 1510076727384
    },
    {
      id: 2,
      fullname: 'Michael',
      checkedIn: false,
      checkedInDate: null
    },
    {
      id: 3,
      fullname: 'David',
      checkedIn: true,
      checkedInDate: 1510076745790
    }]
  }
}
