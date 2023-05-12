import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PelangganService } from '../pelanggan.service';

@Component({
  selector: 'app-history-pelanggan',
  templateUrl: './history-pelanggan.page.html',
  styleUrls: ['./history-pelanggan.page.scss'],
})
export class HistoryPelangganPage implements OnInit {

  id_user: number = 0
  histories: any = []
  constructor(private storage: Storage, public servis: PelangganService) { }

  async ngOnInit() {
    await this.storage.create()
    this.id_user = await this.storage.get('id_user')
    this.fetchData()
  }

  fetchData(){
    this.servis.historyPelanggan(this.id_user.toString()).subscribe(
      (data) => {
        var dataRes: any = data
        if(dataRes['status'] == "Success"){
          this.histories = dataRes['data']
        }
      }
    )
  }
}
