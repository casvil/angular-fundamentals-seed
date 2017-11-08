import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { PassengerDashboardComponent } from './containers';

// components
import {
  PassengerCountComponent,
  PassengerDetailComponent
} from './components';

// service
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}
