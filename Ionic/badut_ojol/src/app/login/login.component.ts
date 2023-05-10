import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PelangganService } from '../pelanggan.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  username=""
  password=""


  constructor(private router: Router, public servis: PelangganService, private alertController: AlertController) { }

  ngOnInit() {}
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
  login(){
    this.servis.login(this.username, this.password).subscribe(
      (data) => {
        var dataRes: any = data
        if(dataRes['status'] == "Success"){
          this.presentAlertSuccess()
          this.router.navigate(['/home-pelanggan/main-pelanggan'])
        }
        else{
          this.presentAlertFailed()
        }
      }
    )
  }
}
