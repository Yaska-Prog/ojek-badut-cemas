import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  registerDriver(username: string, password: string, nama_lengkap: string, tanggal_lahir:string, plat_nomor: string, merk_kendaraan: string, warna_kendaraan:string){
    let body = new HttpParams()
    body = body.set('username', username)
    body = body.set('password', password)
    body = body.set('nama_lengkap', nama_lengkap)
    body = body.set('tanggal_lahir', tanggal_lahir)
    body = body.set('plat_nomor', plat_nomor)
    body = body.set('merk_kendaraan', merk_kendaraan)
    body = body.set('warna_kendaraan', warna_kendaraan)
    return this.http.post('http://localhost/project-isa-cemas/webservice/registerDriver.php', body)
  }

  displayActiveOrderRide():Observable<any>{
    return this.http.get('http://localhost/project-isa-cemas/webservice/listOrderRideAktif.php')
  }

  updateProfile(id_driver: string, password:string, nama_lengkap: string, tanggal_lahir: string, plat_nomor: string, merk_kendaraan: string, warna_kendaraan: string){
    let body = new HttpParams()
    body = body.set('id', id_driver)
    body = body.set('password', password)
    body = body.set('nama_lengkap', nama_lengkap)
    body = body.set('tanggal_lahir', tanggal_lahir)
    body = body.set('plat_nomor', plat_nomor)
    body = body.set('merk_kendaraan', merk_kendaraan)
    body = body.set('warna_kendaraan', warna_kendaraan)
    return this.http.post('http://localhost/project-isa-cemas/webservice/updateProfileDriver.php', body)
  }

  ambilOrderRide(id_order: string, $id_driver: string){
    let body = new HttpParams()
    body = body.set('id', id_order)
    body = body.set('driver_id', $id_driver);
    return this.http.post('http://localhost/project-isa-cemas/webservice/ambilOrderRide.php', body)
  }

  selesaiOrderRide(id_order: string){
    let body = new HttpParams()
    body = body.set('id', id_order)
    return this.http.post('http://localhost/project-isa-cemas/webservice/selesaiOrderRide.php', body)
  }

  detailOrderRide(id_order: string){
    let body = new HttpParams()
    body = body.set('id', id_order)
    return this.http.post('http://localhost/project-isa-cemas/webservice/detailOrderRide.php', body)
  }

  historyOrderRide(id_driver: string){
    let body = new HttpParams()
    body = body.set('id', id_driver)
    return this.http.post('http://localhost/project-isa-cemas/webservice/historyOrderRideDriver.php', body)
  }

  listOnGoingRide(id_driver: string){
    let body = new HttpParams()
    body = body.set('id', id_driver)
    return this.http.post('http://localhost/project-isa-cemas/webservice/listOrderRideProses.php', body)
  }
}
