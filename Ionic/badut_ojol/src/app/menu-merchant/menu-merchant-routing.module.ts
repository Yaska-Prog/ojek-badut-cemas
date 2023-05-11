import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMerchantPage } from './menu-merchant.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMerchantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMerchantPageRoutingModule {}
