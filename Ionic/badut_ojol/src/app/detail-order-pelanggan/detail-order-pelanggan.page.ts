import { Component, OnInit } from '@angular/core';
import { PelangganService } from '../pelanggan.service';
import { ActivatedRoute } from '@angular/router';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-detail-order-pelanggan',
  templateUrl: './detail-order-pelanggan.page.html',
  styleUrls: ['./detail-order-pelanggan.page.scss'],
})
export class DetailOrderPelangganPage implements OnInit {

  id: number = 0
  status = ""
  pemesan = ""
  driver = ""
  alamat_jemput = ""
  alamat_tujuan = ""
  jarak = ""
  tarif = ""

  pdfObj = null


  constructor(public servis: PelangganService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.updateData(this.id)
  }

  pdfDownload() {
    const documentDefinition: TDocumentDefinitions = {
      content: [
        {
          text: 'Order Receipt:',
          style: 'header', 
        },
        'ID Order: ' + this.id,
        'Status Order: ' + this.status,
        'Nama Pemesan: ' + this.pemesan,
        'Nama Driver: ' + this.driver,
        'Alamat penjemputan: ' + this.alamat_jemput,
        'Alamat tujuan: ' + this.alamat_tujuan,
        'Jarak: ' + this.jarak + ' Kilometer',
        'Tarif: Rp. ' + this.tarif,
        'Terima kasih sudah menggunakan go ride kami! Semoga sukses selalu'
      ],
      styles: {
        header: {
          fontSize: 28,
          bold: true,
          alignment: 'center'
        }
      }
    };
    var obj = pdfMake.createPdf(documentDefinition)
    obj.download('demo.pdf')
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
          else {
            this.driver = "Belum di accept!"
          }
        }
      }
    )
  }
}
