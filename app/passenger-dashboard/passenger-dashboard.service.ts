import { Passenger } from './models';

export class PassengerDashboardService {
  constructor() {}

  getPassengers(): Passenger[] {
    return [{
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
    }];
  }
}
