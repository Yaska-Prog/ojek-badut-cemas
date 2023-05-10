import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailOrderPelangganPageRoutingModule } from './detail-order-pelanggan-routing.module';

import { DetailOrderPelangganPage } from './detail-order-pelanggan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailOrderPelangganPageRoutingModule
  ],
  declarations: [DetailOrderPelangganPage]
})
export class DetailOrderPelangganPageModule {}
