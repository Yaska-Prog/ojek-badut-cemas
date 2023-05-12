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
  id_order: number = 0
  id_driver = ""

  constructor(public ds: DriverService, private storage: Storage, private router: Router, private alertController: AlertController) { }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  async ngOnInit() {
    await this.storage.create()
    if (await this.storage.get('id_order') != null) {
      this.id_order = await this.storage.get('id_order')
    }
    this.listOrderRide();
    this.id_driver = await this.storage.get('id_driver')
    this.listOnGoingRide()
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

  listOrderRide() { //untuk mengambil order ride yang belum di acc
    this.ds.displayActiveOrderRide().subscribe(
      (data) => {
        this.result = data['status'];
        if (this.result == 'Success') {
          this.orderRides = data['data'];
        }
      }
    )
  }

  ambilOrderRide() {
    this.ds.ambilOrderRide(this.id_order.toString(), this.id_driver).subscribe(
      (data) => {
        var dataRes: any = data
        this.result = dataRes['status'];
        if (this.result == 'Success') {
          this.presentAlertSuccessAmbil()
          window.location.reload();
        }
        else {
          this.presentAlertFailedAmbil()
        }
      }
    )
  }

  listOnGoingRide() {
    this.ds.listOnGoingRide(this.id_driver).subscribe(
      (data) => {
        var dataRes: any = data
        if (dataRes['status'] == 'Success') {
          this.ongoingOrderRides = dataRes['data'];
        }
      }
    )
  }

  finishOrderRide() {
    this.ds.selesaiOrderRide(this.id_order.toString()).subscribe(
      (data) => {
        var dataRes: any = data
        this.result = dataRes['status'];
        if (this.result == 'Success') {
          this.presentAlertSuccessFinishOrder()
        }
        else {
          this.presentAlertFailedFinishOrder()
        }
      }
    )
  }
  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      header: 'Sukses Logout!',
      subHeader: 'Status Logout',
      message: 'Selamat anda berhasil melakukan logout!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  logOut() {
    this.storage.set('username', '')
    this.storage.set('id_user', '')
    this.storage.set('saldo', '')
    this.storage.set('nama_lengkap', '')
    this.storage.set('tanggal_lahir', '')
    this.storage.set('role', '')
    this.storage.set('plat_nomor', '')
    this.storage.set('merk_kendaraan', '')
    this.storage.set('warna_kendaraan', '')
    this.router.navigate(['/'])
    this.presentAlertSuccess()
  }
}
