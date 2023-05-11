import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PelangganService } from '../pelanggan.service';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.page.html',
  styleUrls: ['./top-up.page.scss'],
})
export class TopUpPage implements OnInit {

  nominal: number = 0
  saldo: number = 0
  password=""
  id=""

  constructor(private router: Router, public servis: PelangganService, private alertController: AlertController, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create()
    this.id = await this.storage.get('id_user')
    this.saldo = +await this.storage.get('saldo')
  }

  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      header: 'Sukses!',
      subHeader: 'Status Top Up',
      message: 'Selamat anda berhasil top up!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertFailed(msg: string) {
    const alert = await this.alertController.create({
      header: 'Gagal!',
      subHeader: 'Status Top Up',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  topUp(){
    this.servis.topUp(this.id, this.nominal.toString(), this.password).subscribe(
      (data) => {
        var dataRes: any = data
        if(dataRes['status'] == "Success"){
          this.saldo += this.nominal
          this.storage.set('saldo', this.saldo)
          this.presentAlertSuccess()
        }
        else if(dataRes['status'] == "Wrong Password"){
          this.presentAlertFailed("Password yang kamu inputkan salah!")
        }
        else{
          this.presentAlertFailed("Kegagalan dari sistem! Harap bersabar!")
        }
      }
    )

  }
}
