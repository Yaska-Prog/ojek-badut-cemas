import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate-pelanggan',
  templateUrl: './navigate-pelanggan.component.html',
  styleUrls: ['./navigate-pelanggan.component.scss'],
})
export class NavigatePelangganComponent  implements OnInit {

  status = false
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

}
