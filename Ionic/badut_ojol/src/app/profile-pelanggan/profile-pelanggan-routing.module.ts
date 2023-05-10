import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePelangganPage } from './profile-pelanggan.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePelangganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePelangganPageRoutingModule {}
