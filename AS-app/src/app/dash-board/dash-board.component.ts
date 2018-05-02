import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor() { }
  public OldEvents=135;
  public EventsInProgress=60;
  public DeletedEvents=15;
  public CommingEvents=560;
  
  ngOnInit() {
  }

}
