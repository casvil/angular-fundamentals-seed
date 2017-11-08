import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerDashboardComponent } from './containers';
import {
  PassengerCountComponent,
  PassengerDetailComponent
} from './components';

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
  ]
})
export class PassengerDashboardModule {}
