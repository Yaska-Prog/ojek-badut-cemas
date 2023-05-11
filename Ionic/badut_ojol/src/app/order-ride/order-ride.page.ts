import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PelangganService } from '../pelanggan.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-ride',
  templateUrl: './order-ride.page.html',
  styleUrls: ['./order-ride.page.scss'],
})
export class OrderRidePage implements OnInit {

  alamat_jemput=""
  alamat_tujuan=""
  jarak: number = 10
  custId=""
  driverId=""

  constructor(private router: Router, private storage: Storage, public servis: PelangganService, private alertController: AlertController) { }

  async ngOnInit() {
    await this.storage.create()
    this.custId = await this.storage.get('id_user')
  }
  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      header: 'Sukses!',
      subHeader: 'Status Pesanan',
      message: 'Selamat anda berhasil memesan !',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlertFailed() {
    const alert = await this.alertController.create({
      header: 'Gagal!',
      subHeader: 'Status Pesanan',
      message: 'Pesanan gagal dibuat! Cek kembali data yang ingin anda masukkan',
      buttons: ['OK'],
    });

    await alert.present();
  }
  order(){
    var jarak1: number = this.jarak
    var tarif: number = this.jarak * 10000
    this.servis.orderRide(this.alamat_jemput, this.alamat_tujuan, jarak1.toString(), tarif.toString(), this.custId).subscribe(
      (data) => {
        var dataRes: any = data
        if(dataRes['status'] == "Success"){
          this.presentAlertSuccess()
          this.storage.set('id_order', dataRes['data']['id'])
          this.router.navigate(['/home-pelanggan/main-pelanggan'])
        } else{
          this.presentAlertFailed()
        }
      }
    )
  }
}
