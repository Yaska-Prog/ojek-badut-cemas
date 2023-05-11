import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMerchantPage } from './main-merchant.page';

const routes: Routes = [
  {
    path: '',
    component: MainMerchantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMerchantPageRoutingModule {}
