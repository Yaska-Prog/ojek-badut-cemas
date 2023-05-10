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
import { HomePelangganComponent } from './home-pelanggan/home-pelanggan.component';
import { NavigatePelangganComponent } from './navigate-pelanggan/navigate-pelanggan.component';
import { HomeDriverComponent } from './home-driver/home-driver.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path: 'register', component: RegisterComponent}, 
  {path: 'registerPelanggan', component: RegisterPelangganComponent}, 
  {path: 'registerDriver', component: RegisterDriverComponent}, 
  {path: 'registerMerchant', component: RegisterMerchantComponent},
  {path: 'homePelanggan', component: HomePelangganComponent},
  {path: 'navigatePelanggan', component: NavigatePelangganComponent}, 
  {path: 'homeDriver', component: HomeDriverComponent}
]

@NgModule({
  declarations: [AppComponent, RegisterComponent, RegisterPelangganComponent, RegisterDriverComponent, RegisterMerchantComponent, LoginComponent, HomePelangganComponent, NavigatePelangganComponent, HomeDriverComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}