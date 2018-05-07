import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EventService } from '../event/event.service';
import { EventModel } from '../event/event.model';
import {  VolunteerModel } from "../volunteer/volunteer.model";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  @Input() EventType: string = "";
  public OldEvents = this.events.oldEvents.length;
  public EventsInProgress = this.events.inProgressEvents.length;
  public DeletedEvents = this.events.deletedEvents.length;
  public CommingEvents = this.events.commingSoonEvents.length;
  constructor(private events: EventService) { 


  }

  @Input() event: EventModel[] = [];
  // @ViewChild('deleted') deleted;
  // @ViewChild('old') old;
  // @ViewChild('InProgress') inProgress;
  // @ViewChild('comming') comming;

  // event: EventModel[]=[];
  View(type) {
    this.EventType = type;
    if (type == "OldEvents") {
      for(var i = 0 ; i < this.events.commingSoonEvents.length ; i++)
      { 
        this.event.push(this.events.commingSoonEvents[i]);
      }  
    }

    if (type == "EventsInProgress") {
     }

    if (type == "DeletedEvents") { 
    }

    if (type == "CommingEvents") { 
    }

  }


  ngOnInit() {
  }

}
