import { Component, OnInit } from '@angular/core';
import { EventService } from '../event/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
addVol=false;
VolList=true;
eventList=false;
  constructor(private eventService : EventService,private router: Router) { 
  }

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
    this.eventService.setClicked(' ');
    this.router.navigate(['/Header/volenteer/VolunteerEvents/eventsList']);

  }

}
