import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryDriverPageRoutingModule } from './history-driver-routing.module';

import { HistoryDriverPage } from './history-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryDriverPageRoutingModule
  ],
  declarations: [HistoryDriverPage]
})
export class HistoryDriverPageModule {}
