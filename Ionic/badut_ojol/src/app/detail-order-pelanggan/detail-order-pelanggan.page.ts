import { Component, OnInit } from '@angular/core';
import { PelangganService } from '../pelanggan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-order-pelanggan',
  templateUrl: './detail-order-pelanggan.page.html',
  styleUrls: ['./detail-order-pelanggan.page.scss'],
})
export class DetailOrderPelangganPage implements OnInit {

  id = ""
  status = ""
  pemesan = ""
  driver = ""
  alamat_jemput = ""
  alamat_tujuan = ""
  jarak = ""
  tarif = ""
  constructor(public servis: PelangganService, public route: ActivatedRoute) { }

  ngOnInit() {
    var id: number = this.route.snapshot.params['id']
    this.updateData(id)
  }
  updateData(id: number) {
    this.servis.detailOrder(id.toString()).subscribe(
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
          if (dataRes['data']['driver_name'] != "") {
            this.driver = dataRes['data']['driver_name']
          }
          else{
            this.driver = "Belum di accept!"
          }
        }
      }
    )
  }
}
