import { Injectable } from '@angular/core';
import { EventModel } from './event.model';
import {VolunteerModel } from '../volunteer/volunteer.model';
import { empty } from 'rxjs/Observer';

@Injectable()
export class EventService {
  commingSoonEvents: EventModel[] = [];
  oldEvents: EventModel[] = [];
  deletedEvents: EventModel[] = [];
  inProgressEvents: EventModel[] = [];
  relatedTo: VolunteerModel[] = [];
  date : DateTimeFormatPartTypes ;
  constructor() {
    this.commingSoonEvents = [
      new EventModel("יום הולדת", "volunteer-Model", this.date , "שלח כרטיס מתנה", this.relatedTo),
    ];
  }
  public get CommingSoonEvents(){
    return this.commingSoonEvents.slice;
  }
  public get DeletedEvents(){
    return this.deletedEvents.slice;
  }
  public get OldEvents(){
    return this.oldEvents.slice;
  }
  public get InProgressEvents(){
    return this.inProgressEvents.slice;
  }

}

