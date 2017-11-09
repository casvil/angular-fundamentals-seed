import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PassengerDashboardModule } from './passenger-dashboard'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    RouterModule,
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
