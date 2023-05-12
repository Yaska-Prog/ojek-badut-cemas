import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-main-pelanggan',
  templateUrl: './main-pelanggan.page.html',
  styleUrls: ['./main-pelanggan.page.scss'],
})
export class MainPelangganPage implements OnInit {

  username = ""
  saldo = ""
  id_order: number = 0

  constructor(private router: Router, private storage: Storage, private alertController: AlertController) { }

  async ngOnInit() {
    await this.storage.create()
    this.username = await this.storage.get('username')
    this.saldo = await this.storage.get('saldo')
    if(await this.storage.get('id_order') != null){
      this.id_order = await this.storage.get('id_order')
    }
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
  async presentAlertMakanan() {
    const alert = await this.alertController.create({
      header: 'Tidak tersedia',
      subHeader: 'Status Fitur',
      message: 'Mohon maaf fitur belum tersedia, harap cek pada rilisan berikutnya',
      buttons: ['OK'],
    });

    await alert.present();
  }
  logOut(){
    this.storage.set('username', '')
    this.storage.set('id_user', '')
    this.storage.set('saldo', '')
    this.storage.set('nama_lengkap', '')
    this.storage.set('tanggal_lahir', '')
    this.storage.set('role', '')
    this.router.navigate(['/'])
    this.presentAlertSuccess()
  }
}
