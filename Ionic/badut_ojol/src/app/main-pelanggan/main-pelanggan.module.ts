import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPelangganPageRoutingModule } from './main-pelanggan-routing.module';

import { MainPelangganPage } from './main-pelanggan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPelangganPageRoutingModule
  ],
  declarations: [MainPelangganPage]
})
export class MainPelangganPageModule {}
