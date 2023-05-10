import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderRidePage } from './order-ride.page';

const routes: Routes = [
  {
    path: '',
    component: OrderRidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRidePageRoutingModule {}
