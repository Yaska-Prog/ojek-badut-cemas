import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePelangganComponent } from './home-pelanggan/home-pelanggan.component';
import { HomeDriverComponent } from './home-driver/home-driver.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home-pelanggan',
    component: HomePelangganComponent, 
    children: [
      {
        path: 'main-pelanggan',
        loadChildren: () => import('./main-pelanggan/main-pelanggan.module').then( m => m.MainPelangganPageModule)
      },
      {
        path: 'history-pelanggan',
        loadChildren: () => import('./history-pelanggan/history-pelanggan.module').then( m => m.HistoryPelangganPageModule)
      },
      {
        path: 'profile-pelanggan',
        loadChildren: () => import('./profile-pelanggan/profile-pelanggan.module').then( m => m.ProfilePelangganPageModule)
      },
      {
        path: 'order-ride',
        loadChildren: () => import('./order-ride/order-ride.module').then( m => m.OrderRidePageModule)
      },
      {
        path: 'top-up',
        loadChildren: () => import('./top-up/top-up.module').then( m => m.TopUpPageModule)
      },
      {
        path: 'detail-order-pelanggan',
        loadChildren: () => import('./detail-order-pelanggan/detail-order-pelanggan.module').then( m => m.DetailOrderPelangganPageModule)
      },
    ], 
  },
  {
    path: 'home-driver', 
    component: HomeDriverComponent, 
    children: [
      {
        path: 'main-driver',
        loadChildren: () => import('./main-driver/main-driver.module').then( m => m.MainDriverPageModule)
      },
      {
        path: 'history-driver',
        loadChildren: () => import('./history-driver/history-driver.module').then( m => m.HistoryDriverPageModule)
      },
      {
        path: 'profile-driver',
        loadChildren: () => import('./profile-driver/profile-driver.module').then( m => m.ProfileDriverPageModule)
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
