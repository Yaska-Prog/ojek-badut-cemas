import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderRidePageRoutingModule } from './order-ride-routing.module';

import { OrderRidePage } from './order-ride.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderRidePageRoutingModule
  ],
  declarations: [OrderRidePage]
})
export class OrderRidePageModule {}
