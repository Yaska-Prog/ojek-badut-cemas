import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http: HttpClient) { }

  registerMerchant(username: string, password: string, nama_lengkap: string, tanggal_lahir: string, nama_resto: string, alamat_resto: string){
    let body = new HttpParams()
    body = body.set('username', username)
    body = body.set('password', password)
    body = body.set('nama_lengkap', nama_lengkap)
    body = body.set('tanggal_lahir', tanggal_lahir)
    body = body.set('nama_resto', nama_resto)
    body = body.set('alamat', alamat_resto)
    return this.http.post('http://localhost/project-isa-cemas/webservice/registerMerchant.php', body)
  }
}
