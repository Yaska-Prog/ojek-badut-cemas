import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainDriverPage } from './main-driver.page';

const routes: Routes = [
  {
    path: '',
    component: MainDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainDriverPageRoutingModule {}
