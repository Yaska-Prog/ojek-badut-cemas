import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailOrderPelangganPage } from './detail-order-pelanggan.page';

const routes: Routes = [
  {
    path: '',
    component: DetailOrderPelangganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailOrderPelangganPageRoutingModule {}
