import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryDriverPage } from './history-driver.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryDriverPageRoutingModule {}
