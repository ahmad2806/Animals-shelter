import { Component, OnInit } from '@angular/core';
import { EventService } from '../event/event.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private events: EventService) { }
  public OldEvents=this.events.OldEvents.length;
  public EventsInProgress=this.events.InProgressEvents.length;
  public DeletedEvents=this.events.DeletedEvents.length;
  public CommingEvents=this.events.commingSoonEvents.length;
  
  ngOnInit() {
  }

}
