import { Component, OnInit, ViewChild } from '@angular/core';
import { DonorService } from '../donor.service';
import { DonorModel } from '../donor.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  @ViewChild('f') newDonorForm: NgForm;

  i: number;
  name = "";
  lastname="";
  id = "";
  address = "";
  phone = "";
  email = "";
  extraphone = "";
  birthday: Date;
  amount;
  privateDonor = false;
  FoundationDonor = false;
  description = "";


  constructor(private donorList: DonorService) {

  }

  ngOnInit() {
  }

  edit(item) {
    this.i = this.donorList.donor.indexOf(item);
    this.name = item.name;
    this.lastname=item.lastName;
    this.id = item.id;
    this.address = item.address;
    this.phone = item.phone;
    this.email = item.email;
    this.extraphone = item.homePhone;
    this.amount = item.amount;
    this.description = item.description;

    if (item.donorType === 'פרטי') {
      this.privateDonor = true;
      this.FoundationDonor = false;
    }
    if (item.donorType === 'קרן') {
      this.privateDonor = false;
      this.FoundationDonor = true;
    }
  }
  disc(item){
    this.description="";
    this.description=item.description;
  }

  save() {

    this.donorList.donor[this.i].name = this.name;
    this.donorList.donor[this.i].lastName=this.lastname;
    this.donorList.donor[this.i].id = this.id;
    this.donorList.donor[this.i].phone = this.phone;
    this.donorList.donor[this.i].email = this.email;
    this.donorList.donor[this.i].homePhone = this.extraphone;
    this.donorList.donor[this.i].amount = this.amount;
    this.donorList.donor[this.i].birthday = this.birthday;
    this.donorList.donor[this.i].address = this.address;
    this.donorList.donor[this.i].description = this.description;
  }

  delete(item) {
    const index = this.donorList.donor.indexOf(item);
    this.donorList.donor.splice(index, 1);
  }
}
