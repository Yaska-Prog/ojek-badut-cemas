import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-order-driver',
  templateUrl: './detail-order-driver.page.html',
  styleUrls: ['./detail-order-driver.page.scss'],
})
export class DetailOrderDriverPage implements OnInit {

  constructor(public ds: DriverService, public route: ActivatedRoute) { }

  id: number = 0
  status = ""
  pemesan = ""
  alamat_jemput = ""
  alamat_tujuan = ""
  jarak = ""
  tarif = ""

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.updateData(this.id)
  }

  updateData(id: number) {
    this.ds.detailOrderRide(id.toString()).subscribe(
      (data) => {
        var dataRes: any = data
        if (dataRes['status'] == "Success") {
          this.id = dataRes['data']['id']
          this.tarif = dataRes['data']['tarif']
          this.status = dataRes['data']['status']
          this.alamat_jemput = dataRes['data']['alamat_jemput']
          this.alamat_tujuan = dataRes['data']['alamat_tujuan']
          this.jarak = dataRes['data']['jarak']
          this.pemesan = dataRes['data']['customer_name']
        }
      }
    )
  }
}
