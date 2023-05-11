import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PelangganService } from '../pelanggan.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""


  constructor(private router: Router, public servis: PelangganService, private alertController: AlertController, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create()
  }
  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      header: 'Sukses!',
      subHeader: 'Status Login',
      message: 'Selamat anda berhasil login!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlertFailed() {
    const alert = await this.alertController.create({
      header: 'Gagal!',
      subHeader: 'Status Login',
      message: 'Username/password salah, apabila belum mempunyai akun harap mendaftarkan diri terlebih dahulu!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  login() {
    this.servis.login(this.username, this.password).subscribe(
      (data) => {
        var dataRes: any = data
        if (dataRes['status'] == "Success") {
          this.presentAlertSuccess()
          var role = dataRes['role']
          if (role == 'Customer') {
            this.storage.set('username', dataRes['data']['username'])
            this.storage.set('id_user', dataRes['data']['id'])
            this.storage.set('saldo', dataRes['data']['saldo'])
            this.storage.set('nama_lengkap', dataRes['data']['nama_lengkap'])
            this.storage.set('tanggal_lahir', dataRes['data']['tanggal_lahir'])
            this.storage.set('role', dataRes['role'])

            if (dataRes['data']['order_id'] != -1) {
              this.storage.set('id_order', dataRes['data']['order_id'])
            }
            this.router.navigate(['/home-pelanggan/main-pelanggan'])
          }
          else if (role == 'Driver'){
            this.storage.set('username', dataRes['data']['username'])
            this.storage.set('id_driver', dataRes['data']['id'])
            this.storage.set('nama_lengkap', dataRes['data']['nama_lengkap'])
            this.storage.set('tanggal_lahir', dataRes['data']['tanggal_lahir'])
            this.storage.set('plat_nomor', dataRes['data']['plat_nomor'])
            this.storage.set('merk_kendaraan', dataRes['data']['merk_kendaraan'])
            this.storage.set('warna_kendaraan', dataRes['data']['warna_kendaraan'])
            this.storage.set('role', dataRes['role'])

            if (dataRes['data']['order_id'] != -1) {
              this.storage.set('id_order', dataRes['data']['order_id'])
            }
            this.router.navigate(['/home-driver/main-driver'])
          }
        }
        else {
          this.presentAlertFailed()
        }
      }
    )
  }
}
