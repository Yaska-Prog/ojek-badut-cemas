import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPelangganPage } from './main-pelanggan.page';

const routes: Routes = [
  {
    path: '',
    component: MainPelangganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPelangganPageRoutingModule {}
