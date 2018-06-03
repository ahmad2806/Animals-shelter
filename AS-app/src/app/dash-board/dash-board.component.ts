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
  // public OldEvents = this.events.oldEvents.length;
  // public EventsInProgress = this.events.inProgressEvents.length;
  // public DeletedEvents = this.events.deletedEvents.length;
  // public CommingEvents = this.events.commingSoonEvents.length;
  constructor(private events: EventService) {

  }
  ngOnInit() {
    let today: Date = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    this.events.oldEvents = [];
    this.events.inProgressEvents = [];
    this.events.CSEDB = [];
    for (let index = 0; index < this.events.commingSoonEvents.length; index++) {
      if (this.events.commingSoonEvents[index].date.getFullYear() > year) {// comming soon
        this.events.CSEDB.push(this.events.commingSoonEvents[index]);
        console.log("comming soon ");
      } else if (this.events.commingSoonEvents[index].date.getFullYear() < year) { //  old events
        this.events.oldEvents.push(this.events.commingSoonEvents[index]);
        console.log('old');
      } else if (this.events.commingSoonEvents[index].date.getFullYear() == year) {
        if (this.events.commingSoonEvents[index].date.getMonth() > month) { //comming soon
          this.events.CSEDB.push(this.events.commingSoonEvents[index]);
          console.log("comming soon monthly");
        }
        else if (this.events.commingSoonEvents[index].date.getMonth() < month) { // old
          this.events.oldEvents.push(this.events.commingSoonEvents[index]);
          console.log('old monthly');
        } else if (this.events.commingSoonEvents[index].date.getMonth() == month) {
          if (this.events.commingSoonEvents[index].date.getDay() > day) { // comming soon
            console.log("comming soon daily");
          } else if (this.events.commingSoonEvents[index].date.getDate() < day) { //old
            this.events.oldEvents.push(this.events.commingSoonEvents[index]);
            console.log('old daily');
          } else if (this.events.commingSoonEvents[index].date.getDate() == day) { // ingprogress today
            this.events.inProgressEvents.push(this.events.commingSoonEvents[index]);
            console.log('inprogress');
          }
        }
      }
    }
  }

  @Input() event: EventModel[] = [];

  View(type) {
    this.EventType = type;
    this.event = [];
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



}
