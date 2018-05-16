import { Component, OnInit, ViewChild } from '@angular/core';
import { DonorService } from '../donor.service';
import { NgForm, FormControl } from '@angular/forms';
import { DonorModel } from '../donor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit {

  name = "";
  id = "";
  address = "";
  phone = "";
  email = "";
  extraphone = "";
  birthday: Date;
  amount;


  Foundation = false;
  private = false;
  constructor(private donor: DonorService) { }

  ngOnInit() {
  }

  radioChoice(choice: string) {
    if (choice == 'Foundation') {
      this.Foundation = true;
      this.private = false;
    }
    if (choice == 'private') {
      this.private = true;
      this.Foundation = false;
    }
  }
  reset(){
    this.name = "";
    this.id = "";
    this.address = "";
    this.phone = "";
    this.email = "";
    this.extraphone = "";
    this.birthday;
    this.amount;
    // this.private = false;
    // this.Foundation = false;
  }

  save() {
    let newDonor: DonorModel;
    if (this.Foundation == true) {
      newDonor = new DonorModel(this.name, this.id, this.birthday, this.address, this.phone, this.extraphone, this.email, "קרן", this.amount, []);
      this.donor.donor.push(newDonor);
    }
    if (this.private == true) {
      newDonor = new DonorModel(this.name, this.id, this.birthday, this.address, this.phone, this.extraphone, this.email, "פרטי", this.amount,[]);
      this.donor.donor.push(newDonor);
    }
    this.reset();
  }
}
