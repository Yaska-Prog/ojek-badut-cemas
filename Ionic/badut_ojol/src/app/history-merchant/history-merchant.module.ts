import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryMerchantPageRoutingModule } from './history-merchant-routing.module';

import { HistoryMerchantPage } from './history-merchant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryMerchantPageRoutingModule
  ],
  declarations: [HistoryMerchantPage]
})
export class HistoryMerchantPageModule {}
