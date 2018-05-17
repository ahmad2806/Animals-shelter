import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { EventService } from '../event/event.service';
import { EventModel } from '../event/event.model';
import { VolunteerModel } from "../volunteer/volunteer.model";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  @ViewChild('m') m: ElementRef;
  @Input() EventType: string = "";
  public OldEvents = this.events.oldEvents.length;
  public EventsInProgress = this.events.inProgressEvents.length;
  public DeletedEvents = this.events.deletedEvents.length;
  public CommingEvents = this.events.commingSoonEvents.length;
  constructor(private events: EventService) {

  }

  @Input() event: EventModel[] = [];

  View(type) {
    this.EventType = type;
    this.event = [];
    console.log(type);
    if (type == "done") {
      this.events.setClicked('old');
    }

    else if (type == "donut_large") {

      this.events.setClicked('inProgress');
    }

    else if (type == "clear") {

      this.events.setClicked('deleted');
    }

    else if (type == "alarm") {

      this.events.setClicked('commingSoon');
    }

    
    this.m.nativeElement;


  }


  ngOnInit() {
  }

}
