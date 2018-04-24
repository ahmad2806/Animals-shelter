import { Component, OnInit } from '@angular/core';

import { VolunteersService } from '../volunteers.service';

@Component({
  selector: 'app-vol-list',
  templateUrl: './vol-list.component.html',
  styleUrls: ['./vol-list.component.css']
})
export class VolListComponent implements OnInit {

  constructor(public volservice:VolunteersService) { }

  ngOnInit() {
  }

}
