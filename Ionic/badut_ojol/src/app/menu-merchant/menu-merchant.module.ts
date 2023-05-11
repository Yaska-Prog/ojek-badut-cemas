import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMerchantPageRoutingModule } from './menu-merchant-routing.module';

import { MenuMerchantPage } from './menu-merchant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuMerchantPageRoutingModule
  ],
  declarations: [MenuMerchantPage]
})
export class MenuMerchantPageModule {}
