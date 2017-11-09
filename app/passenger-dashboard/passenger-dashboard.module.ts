import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'passengers',
    component: PassengerDashboardComponent
  }
];

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
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}
