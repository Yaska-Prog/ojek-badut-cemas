import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrls: ['./register-driver.component.scss'],
})
export class RegisterDriverComponent implements OnInit {

  username = ""
  password = ""
  re_password = ""
  nama_lengkap = ""
  tanggal_lahir = ""
  plat_nomor = ""
  merk_kendaraan = ""
  warna_kendaraan = ""

  constructor(public service: DriverService, private alertController: AlertController, private router: Router) { }

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
  registerDriver() {
    if (this.re_password = this.password) {
      this.service.registerDriver(this.username, this.password, this.nama_lengkap, this.tanggal_lahir, this.plat_nomor, this.merk_kendaraan, this.warna_kendaraan).subscribe(
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
