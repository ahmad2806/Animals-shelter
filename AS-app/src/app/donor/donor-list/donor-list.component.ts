import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';
import { DonorModel } from '../donor.model';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  donors:DonorModel[]=[];
  constructor(private donorList:DonorService){
    for(let i=0;i<this.donorList.donor.length;i++){
      this.donors[i]=this.donorList.donor[i];
    }
  }

  ngOnInit() {
  }

}
