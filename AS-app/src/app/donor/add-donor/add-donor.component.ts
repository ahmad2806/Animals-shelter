import { Component, OnInit, ViewChild } from '@angular/core';
import { DonorService } from '../donor.service';
import { NgForm, FormControl } from '@angular/forms';
import { DonorModel } from '../donor.model';
import { Router } from '@angular/router';
import { EventService } from '../../event/event.service';
import { EventModel } from '../../event/event.model';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit {

  name = "";
  lastname="";
  id = "";
  address = "";
  phone = "";
  email = "";
  extraphone = "";
  birthday: Date;
  amount;
  discription="";
  

  Foundation = true;
  private = false;
  constructor(private donor: DonorService,private newEvent: EventService) { }

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
    this.lastname="";
    this.id = "";
    this.address = "";
    this.phone = "";
    this.email = "";
    this.extraphone = "";
    this.birthday;
    this.amount;
    this.discription="";
    this.private = false;
    this.Foundation = true;
  }

  save() {
    let newDonor: DonorModel;
    if (this.Foundation == true) {
      newDonor = new DonorModel(this.name,this.lastname, this.id, this.birthday, this.address, this.phone, this.extraphone, this.email, "קרן", this.amount, [],this.discription);
      this.donor.donor.push(newDonor);
    }
    if (this.private == true) {
      newDonor = new DonorModel(this.name,this.lastname, this.id, this.birthday, this.address, this.phone, this.extraphone, this.email, "פרטי", this.amount,[],this.discription);
      this.donor.donor.push(newDonor);
    }
    this.newEvent.add(new EventModel("לתרום שוב", "donor-Model", new Date(2018, 0, 8), "האם רוצה לתרום שוב",[] , [],[]));

    this.reset();
  }
}
