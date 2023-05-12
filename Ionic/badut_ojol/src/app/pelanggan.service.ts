import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {

  webservice = "http://localhost/project-isa-cemas/webservice/registerCustomer.php"
  constructor(private http: HttpClient) {}

  registerPelanggan(username: string, password: string, nama_lengkap: string, tanggal_lahir: string){
    let body = new HttpParams()
    body = body.set('username', username)
    body = body.set('password', password)
    body = body.set('nama_lengkap', nama_lengkap)
    body = body.set('tanggal_lahir', tanggal_lahir)
    return this.http.post('http://localhost/project-isa-cemas/webservice/registerCustomer.php', body)
  }

  login(username: string, password: string){
    let body = new HttpParams()
    body = body.set('username', username)
    body = body.set('password', password)
    return this.http.post('http://localhost/project-isa-cemas/webservice/login.php', body)
  }

  historyPelanggan(custId: string){
    let body = new HttpParams()
    body = body.set('id', custId)
    return this.http.post('http://localhost/project-isa-cemas/webservice/historyOrderRideCustomer.php', body)
  }

  orderRide(alamat_jemput: string, alamat_tujuan: string, jarak: string, tarif: string, custId: string){
    let body = new HttpParams()
    body = body.set('alamat_jemput', alamat_jemput)
    body = body.set('alamat_tujuan', alamat_tujuan)
    body = body.set('jarak', jarak)
    body = body.set('tarif', tarif)
    body = body.set('customer_id', custId)
    return this.http.post('http://localhost/project-isa-cemas/webservice/orderRide.php', body)
  }

  detailOrder(id_order: string){
    let body = new HttpParams()
    body = body.set('id', id_order)
    return this.http.post('http://localhost/project-isa-cemas/webservice/detailOrderRide.php', body)
  }

  ubahProfil(id_user: string, nama_lengkap: string, tanggal_lahir: string, password: string){
    let body = new HttpParams()
    body = body.set('id', id_user)
    body = body.set('password', password)
    body = body.set('nama_lengkap', nama_lengkap)
    body = body.set('tanggal_lahir', tanggal_lahir)
    return this.http.post('http://localhost/project-isa-cemas/webservice/updateProfileCustomer.php', body)
  }

  topUp(id_user: string, nominal: string, password: string){
    let body = new HttpParams()
    body = body.set('id', id_user)
    body = body.set('nominal', nominal)
    body = body.set('password', password)
    return this.http.post('http://localhost/project-isa-cemas/webservice/topUpSaldoCustomer.php', body)
  }
}
