import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainMerchantPageRoutingModule } from './main-merchant-routing.module';

import { MainMerchantPage } from './main-merchant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainMerchantPageRoutingModule
  ],
  declarations: [MainMerchantPage]
})
export class MainMerchantPageModule {}
