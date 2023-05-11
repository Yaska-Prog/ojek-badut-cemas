import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  loginDriver(username: string, password: string){
    let body = new HttpParams()
    body = body.set('username', username)
    body = body.set('password', password)
    return this.http.post('http://localhost/project-isa-cemas/webservice/login.php', body)
  }
}
