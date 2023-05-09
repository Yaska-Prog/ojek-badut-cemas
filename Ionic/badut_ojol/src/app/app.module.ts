import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterPelangganComponent } from './register-pelanggan/register-pelanggan.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { RegisterMerchantComponent } from './register-merchant/register-merchant.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path: 'register', component: RegisterComponent}, 
  {path: 'registerPelanggan', component: RegisterPelangganComponent}, 
  {path: 'registerDriver', component: RegisterDriverComponent}, 
  {path: 'registerMerchant', component: RegisterMerchantComponent},
]

@NgModule({
  declarations: [AppComponent, RegisterComponent, RegisterPelangganComponent, RegisterDriverComponent, RegisterMerchantComponent, LoginComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}