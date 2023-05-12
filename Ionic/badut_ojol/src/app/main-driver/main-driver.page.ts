import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main-driver',
  templateUrl: './main-driver.page.html',
  styleUrls: ['./main-driver.page.scss'],
})
export class MainDriverPage implements OnInit {
  type = 'ride';
  orderRides = [];
  ongoingOrderRides = [];
  result = "";
  id_order = ""
  id_driver = ""

  constructor(public ds: DriverService, private storage: Storage, private router: Router, private alertController: AlertController) { }

  segmentChanged(ev: any){
    console.log('Segment changed', ev);
  }

  async ngOnInit() {
    await this.storage.create()
    if(await this.storage.get('id_order') != null){
      this.id_order = await this.storage.get('id_order')
    }
    this.listOrderRide();
    this.listOngoingRide();
  }

  async presentAlertSuccessAmbil() {
    const alert = await this.alertController.create({
      header: 'Sukses!',
      subHeader: 'Status Pesanan',
      message: 'Pesanan diambil, selamat melayani!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlertFailedAmbil() {
    const alert = await this.alertController.create({
      header: 'Gagal!',
      subHeader: 'Status Pesanan',
      message: 'Pesanan gagal diambil! Silahkan coba lagi!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertSuccessFinishOrder() {
    const alert = await this.alertController.create({
      header: 'Sukses!',
      subHeader: 'Status Pesanan',
      message: 'Berhasil menyelesaikan pesanan',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlertFailedFinishOrder() {
    const alert = await this.alertController.create({
      header: 'Gagal!',
      subHeader: 'Status Pesanan',
      message: 'Gagal menyelesaikan pesanan',
      buttons: ['OK'],
    });

    await alert.present();
  }

  listOrderRide(){
    this.ds.displayActiveOrderRide().subscribe(
      (data) => {
        this.result = data['status'];
        if(this.result == 'Success'){
          this.orderRides = data['data'];
        }
      }
    )
  }

  listOngoingRide(){
    this.ds.ambilOrderRide(this.id_order, this.id_driver).subscribe(
      (data) => {
        var dataRes: any = data
        this.result = dataRes['status'];
        if(this.result == 'Success'){
          this.presentAlertSuccessAmbil()
          this.ongoingOrderRides = dataRes['data'];
        }
        else{
          this.presentAlertFailedAmbil()
        }
      }
    )
  }

  finishOrderRide(){
    this.ds.selesaiOrderRide(this.id_order).subscribe(
      (data) => {
        var dataRes: any = data
        this.result = dataRes['status'];
        if(this.result == 'Success'){
          this.presentAlertSuccessFinishOrder()
        }
        else{
          this.presentAlertFailedFinishOrder()
        }
      }
    )
  }
}
