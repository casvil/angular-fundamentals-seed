import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashboardModule } from './passenger-dashboard'

import {
  AppComponent,
  HomeComponent,
  NotFoundComponent
} from './index';

const routes: Routes = [
  { path: '', redirectTo: 'passengers', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    // RouterModule.forRoot(routes, { useHash: true }), // Hash location strategy
    RouterModule.forRoot(routes),
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
