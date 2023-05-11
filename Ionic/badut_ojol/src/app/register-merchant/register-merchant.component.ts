import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from '../merchant.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-merchant',
  templateUrl: './register-merchant.component.html',
  styleUrls: ['./register-merchant.component.scss'],
})
export class RegisterMerchantComponent implements OnInit {

  username = ""
  password = ""
  re_password = ""
  nama_lengkap = ""
  tanggal_lahir = ""
  nama_resto = ""
  alamat_resto = ""

  constructor(private router: Router, public servis: MerchantService, private alertController: AlertController) { }

  ngOnInit() { }

  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      header: 'Sukses!',
      subHeader: 'Status Register',
      message: 'Selamat anda berhasil Register!',
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

  register(){
    if(this.re_password == this.password){
      this.servis.registerMerchant(this.username, this.password, this.nama_lengkap, this.tanggal_lahir, this.nama_resto, this.alamat_resto).subscribe(
        (data) => {
          var dataRes: any = data
          if(dataRes['status'] == "Success"){
            this.presentAlertSuccess()
            this.router.navigate([''])
          } else{
            this.presentAlertFailed()
          }
        }
      )
    }
  }
}
