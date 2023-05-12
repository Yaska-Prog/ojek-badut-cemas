import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePelangganComponent } from './home-pelanggan/home-pelanggan.component';
import { HomeDriverComponent } from './home-driver/home-driver.component';
import { LoginComponent } from './login/login.component';
import { HomeMerchantComponent } from './home-merchant/home-merchant.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home-pelanggan',
    component: HomePelangganComponent,
    children: [
      {
        path: 'main-pelanggan',
        loadChildren: () => import('./main-pelanggan/main-pelanggan.module').then(m => m.MainPelangganPageModule)
      },
      {
        path: 'history-pelanggan',
        loadChildren: () => import('./history-pelanggan/history-pelanggan.module').then(m => m.HistoryPelangganPageModule)
      },
      {
        path: 'profile-pelanggan',
        loadChildren: () => import('./profile-pelanggan/profile-pelanggan.module').then(m => m.ProfilePelangganPageModule)
      },
      {
        path: 'order-ride',
        loadChildren: () => import('./order-ride/order-ride.module').then(m => m.OrderRidePageModule)
      },
      {
        path: 'top-up',
        loadChildren: () => import('./top-up/top-up.module').then(m => m.TopUpPageModule)
      },
      {
        path: 'detail-order-pelanggan/:id',
        loadChildren: () => import('./detail-order-pelanggan/detail-order-pelanggan.module').then(m => m.DetailOrderPelangganPageModule)
      },
    ],
  },
  {
    path: 'home-driver',
    component: HomeDriverComponent,
    children: [
      {
        path: 'main-driver',
        loadChildren: () => import('./main-driver/main-driver.module').then(m => m.MainDriverPageModule)
      },
      {
        path: 'history-driver',
        loadChildren: () => import('./history-driver/history-driver.module').then(m => m.HistoryDriverPageModule)
      },
      {
        path: 'profile-driver',
        loadChildren: () => import('./profile-driver/profile-driver.module').then(m => m.ProfileDriverPageModule)
      },
      {
        path: 'detail-order-driver/:id',
        loadChildren: () => import('./detail-order-driver/detail-order-driver.module').then( m => m.DetailOrderDriverPageModule)
      },
    ]
  },
  {
    path: 'home-merchant',
    component: HomeMerchantComponent,
    children: [
      {
        path: 'main-merchant',
        loadChildren: () => import('./main-merchant/main-merchant.module').then(m => m.MainMerchantPageModule)
      },
      {
        path: 'profile-merchant',
        loadChildren: () => import('./profile-merchant/profile-merchant.module').then(m => m.ProfileMerchantPageModule)
      },
      {
        path: 'history-merchant',
        loadChildren: () => import('./history-merchant/history-merchant.module').then(m => m.HistoryMerchantPageModule)
      },
      {
        path: 'menu-merchant',
        loadChildren: () => import('./menu-merchant/menu-merchant.module').then(m => m.MenuMerchantPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
