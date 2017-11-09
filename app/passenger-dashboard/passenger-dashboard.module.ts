import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// containers
import { PassengerDashboardComponent, PassengerViewerComponent } from './containers';

// components
import {
  PassengerCountComponent,
  PassengerDetailComponent
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
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}
