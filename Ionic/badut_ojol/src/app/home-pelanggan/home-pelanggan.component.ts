import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home-pelanggan',
  templateUrl: './home-pelanggan.component.html',
  styleUrls: ['./home-pelanggan.component.scss'],
})
export class HomePelangganComponent  implements OnInit {

  constructor(private alertConroller: AlertController) { }
  async presentAlertMakanan() {
    const alert = await this.alertConroller.create({
      header: 'Tidak tersedia',
      subHeader: 'Status Fitur',
      message: 'Mohon maaf fitur belum tersedia, harap cek pada rilisan berikutnya',
      buttons: ['OK'],
    });

    await alert.present();
  }
  ngOnInit() {
    this.presentAlertMakanan()
  }

}
