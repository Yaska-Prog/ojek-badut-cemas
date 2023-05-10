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
}
