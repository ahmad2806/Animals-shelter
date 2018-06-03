import { Injectable } from '@angular/core';
import { EventModel } from './event.model';
import { VolunteerModel } from '../volunteer/volunteer.model';
import { empty } from 'rxjs/Observer';
import { FreeDayes } from '../volunteer/free-days.model';
import { EventEmitter } from 'protractor';

@Injectable()
export class EventService {
  CSEDB: EventModel[] = [];
  generalEvents: EventModel[] = [];
  commingSoonEvents: EventModel[] = [];
  oldEvents: EventModel[] = [];
  deletedEvents: EventModel[] = [];
  inProgressEvents: EventModel[] = [];
  relatedTo: VolunteerModel[] = [];
  arrived: VolunteerModel[] = [];
  arrived1: VolunteerModel[] = [];
  didntarrived: VolunteerModel[] = [];
  date: Date;

  clicked: string = "";
  constructor() {


    this.relatedTo = [
      new VolunteerModel("אחמד", "20541774", new Date, "beit-hanina", "0524651749", "",
        "025859294", "AHMADLOXIZ@gmail.com", "cat", new FreeDayes(true, false, true, true, true, false, false), true, false, "software engineering", ""),
      new VolunteerModel("אחמד", "20541774", new Date, "beit-hanina", "0524651749", "",
        "025859294", "AHMADLOXIZ@gmail.com", "cat", new FreeDayes(true, false, true, true, true, false, false), true, false, "software engineering", ""),
      new VolunteerModel("אחמד", "20541774", new Date, "beit-hanina", "0524651749", "",
        "025859294", "AHMADLOXIZ@gmail.com", "cat", new FreeDayes(true, false, true, true, true, false, false), true, false, "software engineering", ""),
    ];
    this.didntarrived = this.relatedTo;
    this.commingSoonEvents = [ //year,month,date
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 0, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 1, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 2, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 3, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 4, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 5, 3), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 6, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 7, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 8, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 9, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 10, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 11, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2019, 0, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2019, 1, 13), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2019, 2, 19), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2019, 3, 30), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 4, 20), "שלח כרטיס תנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2018, 4, 20), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
    ];
    this.deletedEvents = [
      new EventModel("יום הולדת", "volunteer-Model", new Date(2019, 0, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
      new EventModel("יום הולדת", "volunteer-Model", new Date(2019, 0, 8), "שלח כרטיס מתנה", this.relatedTo, [], this.didntarrived),
    ];
    this.generalEvents = this.commingSoonEvents;
  }
  public get CommingSoonEvents() {
    return this.commingSoonEvents.slice;
  }
  public get DeletedEvents() {
    return this.deletedEvents.slice;
  }
  public get OldEvents() {
    return this.oldEvents.slice;
  }
  public get InProgressEvents() {
    return this.inProgressEvents.slice;
  }
  public add(event: EventModel) {
    this.commingSoonEvents.push(event);
  }
  public get Clicked() {
    console.log(this.clicked);
    return this.clicked;
  }
  public setClicked(input: string) {
    if (input === 'old')
      this.generalEvents = this.oldEvents;
    else if (input === 'inProgress')
      this.generalEvents = this.inProgressEvents;
    else if (input === 'deleted')
      this.generalEvents = this.deletedEvents;
    else if (input === 'commingSoon')
      this.generalEvents = this.CSEDB;
    else
      this.generalEvents = this.commingSoonEvents;
  }
}

