import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-history-driver',
  templateUrl: './history-driver.page.html',
  styleUrls: ['./history-driver.page.scss'],
})
export class HistoryDriverPage implements OnInit {

  id_driver = ""
  completeOrders: any = []
  constructor(public service: DriverService, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create()
    this.id_driver = await this.storage.get('id_driver')
    this.service.historyOrderRide(this.id_driver).subscribe(
      (data) => {
        var dataRes: any = data
        if(dataRes['status'] == "Success"){
          this.completeOrders = dataRes['data']
        }
      }
    )
  }
}
