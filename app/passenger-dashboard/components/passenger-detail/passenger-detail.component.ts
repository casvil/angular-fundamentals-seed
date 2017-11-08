import { Component, Input } from '@angular/core';

import { Passenger } from '../../models';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      {{ detail.fullname }}
      <div class="date">
        Check in date:
        {{ detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
      </div>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input() detail: Passenger;
  constructor() {}
}
