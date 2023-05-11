import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-main-pelanggan',
  templateUrl: './main-pelanggan.page.html',
  styleUrls: ['./main-pelanggan.page.scss'],
})
export class MainPelangganPage implements OnInit {

  username = ""
  id_order: number = 0

  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create()
    this.username = await this.storage.get('username')
    if(await this.storage.get('id_order') != null){
      this.id_order = await this.storage.get('id_order')
    }
  }
  orderRide(){
    this.router.navigate(["order-ride"]);
  }
}
