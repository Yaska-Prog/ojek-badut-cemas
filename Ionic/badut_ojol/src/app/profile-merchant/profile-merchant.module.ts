import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMerchantPageRoutingModule } from './profile-merchant-routing.module';

import { ProfileMerchantPage } from './profile-merchant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMerchantPageRoutingModule
  ],
  declarations: [ProfileMerchantPage]
})
export class ProfileMerchantPageModule {}
