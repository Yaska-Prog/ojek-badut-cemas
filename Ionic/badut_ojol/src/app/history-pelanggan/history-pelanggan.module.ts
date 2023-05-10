import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPelangganPageRoutingModule } from './history-pelanggan-routing.module';

import { HistoryPelangganPage } from './history-pelanggan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPelangganPageRoutingModule
  ],
  declarations: [HistoryPelangganPage]
})
export class HistoryPelangganPageModule {}
