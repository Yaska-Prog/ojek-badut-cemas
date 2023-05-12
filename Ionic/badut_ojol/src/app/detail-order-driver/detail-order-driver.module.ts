import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailOrderDriverPageRoutingModule } from './detail-order-driver-routing.module';

import { DetailOrderDriverPage } from './detail-order-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailOrderDriverPageRoutingModule
  ],
  declarations: [DetailOrderDriverPage]
})
export class DetailOrderDriverPageModule {}
