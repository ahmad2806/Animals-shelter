import { Component, OnInit } from '@angular/core';
import { EventService } from '../event/event.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
addVol=false;
VolList=true;
eventList=false;
  constructor(private eventService : EventService) { }

  ngOnInit() {
  }

  add(){
   this.addVol=!this.addVol;
   this.VolList=false;
   this.eventList=false;
  }
  list(){
    this.addVol=false;
    this.VolList=!this.VolList;
    this.eventList=false;
  }
  events(){
    this.addVol=false;
    this.VolList=false;
    this.eventList=!this.VolList;
  }
  onclick(){
    this.eventService.clicked = 'mainList';
  }

}
