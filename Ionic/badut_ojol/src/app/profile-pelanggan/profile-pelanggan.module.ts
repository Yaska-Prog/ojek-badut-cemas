import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePelangganPageRoutingModule } from './profile-pelanggan-routing.module';

import { ProfilePelangganPage } from './profile-pelanggan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePelangganPageRoutingModule
  ],
  declarations: [ProfilePelangganPage]
})
export class ProfilePelangganPageModule {}
