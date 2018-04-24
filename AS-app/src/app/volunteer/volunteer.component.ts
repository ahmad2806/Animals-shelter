import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
addVol=false;
VolList=true;
  constructor() { }

  ngOnInit() {
  }

  add(){
   this.addVol=true;
   this.VolList=false;
  }
  list(){
    this.addVol=false;
    this.VolList=true;
  }

}
