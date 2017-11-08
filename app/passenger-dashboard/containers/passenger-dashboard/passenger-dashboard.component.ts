import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/index';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
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

  handleRemove(event) {
    console.log(event);
  }

  handleEdit(event) {
    console.log(event);
  }
}
