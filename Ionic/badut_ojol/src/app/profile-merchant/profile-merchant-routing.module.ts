import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileMerchantPage } from './profile-merchant.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileMerchantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileMerchantPageRoutingModule {}
