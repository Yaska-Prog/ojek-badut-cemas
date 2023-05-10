import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePelangganComponent } from './home-pelanggan/home-pelanggan.component';
import { HomeDriverComponent } from './home-driver/home-driver.component';

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
    ], 
  },
  {
    path: 'order-ride',
    loadChildren: () => import('./order-ride/order-ride.module').then( m => m.OrderRidePageModule)
  },
  {
    path: 'home-driver', 
    component: HomeDriverComponent, 
    children: [
      {
        path: 'main-driver',
        loadChildren: () => import('./main-driver/main-driver.module').then( m => m.MainDriverPageModule)
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
