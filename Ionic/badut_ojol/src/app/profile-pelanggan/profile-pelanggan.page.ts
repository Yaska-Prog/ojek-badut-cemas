import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { PelangganService } from '../pelanggan.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile-pelanggan',
  templateUrl: './profile-pelanggan.page.html',
  styleUrls: ['./profile-pelanggan.page.scss'],
})
export class ProfilePelangganPage implements OnInit {

  username = ""
  password = ""
  re_password = ""
  nama_lengkap = ""
  tanggal_lahir = ""
  constructor(private router: Router, public servis: PelangganService, private alertController: AlertController, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create()
    this.nama_lengkap = await this.storage.get('nama_lengkap')
    this.tanggal_lahir = await this.storage.get('tanggal_lahir')
    this.username = await this.storage.get('username')
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
  async ubahProfil() {
    var id = await this.storage.get('id_user')
    if (this.re_password = this.password) {
      this.servis.ubahProfil(id, this.nama_lengkap, this.tanggal_lahir, this.password).subscribe(
        (data) => {
          var dataRes: any = data
          if (dataRes['status'] == "Success") {
            this.storage.set('nama_lengkap', dataRes['data']['nama_lengkap'])
            this.storage.set('tanggal_lahir', dataRes['data']['tanggal_lahir'])
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
