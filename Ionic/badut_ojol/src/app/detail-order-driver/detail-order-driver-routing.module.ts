import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailOrderDriverPage } from './detail-order-driver.page';

const routes: Routes = [
  {
    path: '',
    component: DetailOrderDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailOrderDriverPageRoutingModule {}
