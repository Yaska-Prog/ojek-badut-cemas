import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryPelangganPage } from './history-pelanggan.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryPelangganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryPelangganPageRoutingModule {}
