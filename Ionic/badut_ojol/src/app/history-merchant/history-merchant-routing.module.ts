import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryMerchantPage } from './history-merchant.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryMerchantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryMerchantPageRoutingModule {}
