import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-pelanggan',
  templateUrl: './main-pelanggan.page.html',
  styleUrls: ['./main-pelanggan.page.scss'],
})
export class MainPelangganPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  orderRide(){
    this.router.navigate(['/order-ride'])
  }
}
