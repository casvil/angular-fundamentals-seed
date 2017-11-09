import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// containers
import {
  PassengerDashboardComponent,
  PassengerViewerComponent,
 } from './containers';

// components
import {
  PassengerCountComponent,
  PassengerDetailComponent,
  PassengerFormComponent,
} from './components';

// service
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    // smart containers
    PassengerDashboardComponent,
    PassengerViewerComponent,
    // dumb components
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}
