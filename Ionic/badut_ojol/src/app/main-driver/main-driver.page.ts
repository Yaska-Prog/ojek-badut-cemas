import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-main-driver',
  templateUrl: './main-driver.page.html',
  styleUrls: ['./main-driver.page.scss'],
})
export class MainDriverPage implements OnInit {
  type = 'ride';
  orderRides = [];
  result = "";

  constructor(public ds: DriverService) { }

  segmentChanged(ev: any){
    console.log('Segment changed', ev);
  }

  ngOnInit() {
    this.listOrderRide();
  }

  listOrderRide(){
    this.ds.displayActiveOrderRide().subscribe(
      (data) => {
        this.result = data['status'];
        if(this.result == 'Success'){
          this.orderRides = data['data'];
        }
      }
    )
  }
}
