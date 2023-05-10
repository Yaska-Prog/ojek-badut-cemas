import { Component, OnInit } from '@angular/core';
import { PelangganService } from '../pelanggan.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-pelanggan',
  templateUrl: './register-pelanggan.component.html',
  styleUrls: ['./register-pelanggan.component.scss'],
})
export class RegisterPelangganComponent implements OnInit {

  username = ""
  password = ""
  re_password = ""
  nama_lengkap = ""
  tanggal_lahir = ""

  constructor(public servis: PelangganService, private alertController: AlertController, private router: Router) { }

  ngOnInit() { }
  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      header: 'Sukses!',
      subHeader: 'Status Register',
      message: 'Selamat anda berhasil register!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlertFailed() {
    const alert = await this.alertController.create({
      header: 'Gagal!',
      subHeader: 'Status Register',
      message: 'Data tidak valid, harap memenuhi ketentuan yang ada',
      buttons: ['OK'],
    });

    await alert.present();
  }
  register() {
    if (this.re_password = this.password) {
      this.servis.registerPelanggan(this.username, this.password, this.nama_lengkap, this.tanggal_lahir).subscribe(
        (data) => {
          var dataRes: any = data
          if (dataRes['status'] == "Success") {
            this.presentAlertSuccess()
            this.router.navigate([''])
          }
          else {
            this.presentAlertFailed()
          }
        }
      )
    }
  }
}
