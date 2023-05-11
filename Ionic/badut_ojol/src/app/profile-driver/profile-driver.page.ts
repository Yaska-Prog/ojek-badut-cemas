import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../driver.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile-driver',
  templateUrl: './profile-driver.page.html',
  styleUrls: ['./profile-driver.page.scss'],
})
export class ProfileDriverPage implements OnInit {

  username = ""
  password = ""
  re_password = ""
  nama_lengkap = ""
  tanggal_lahir = ""
  plat_nomor = ""
  merk_kendaraan = ""
  warna_kendaraan = ""

  constructor(private router: Router, public service: DriverService, private alertController: AlertController, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create()
    this.nama_lengkap = await this.storage.get('nama_lengkap')
    this.tanggal_lahir = await this.storage.get('tanggal_lahir')
    this.username = await this.storage.get('username')
    this.plat_nomor = await this.storage.get('plat_nomor')
    this.merk_kendaraan = await this.storage.get('merk_kendaraan')
    this.warna_kendaraan = await this.storage.get('warna_kendaraan')
  }

  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      header: 'Sukses!',
      subHeader: 'Status Ubah Profil',
      message: 'Selamat anda berhasil mengubah profil anda!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertFailed() {
    const alert = await this.alertController.create({
      header: 'Gagal!',
      subHeader: 'Status Ubah Profil',
      message: 'Data tidak valid! Harap croscheck kembali data yang akan anda ubah!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async ubahProfilDriver() {
    var id = await this.storage.get('id_driver')
    if (this.re_password = this.password) {
      this.service.updateProfile(id, this.password, this.nama_lengkap, this.tanggal_lahir, this.plat_nomor, this.merk_kendaraan, this.warna_kendaraan).subscribe(
        (data) => {
          var dataRes: any = data
          if (dataRes['status'] == "Success") {
            this.storage.set('nama_lengkap', dataRes['data']['nama_lengkap'])
            this.storage.set('tanggal_lahir', dataRes['data']['tanggal_lahir'])
            this.storage.set('plat_nomor', dataRes['data']['plat_nomor'])
            this.storage.set('merk_kendaraan', dataRes['data']['merk_kendaraan'])
            this.storage.set('warna_kendaraan', dataRes['data']['warna_kendaraan'])

            this.presentAlertSuccess()
          }
          else {
            this.presentAlertFailed()
          }
        }
      )
    }
  }
}
