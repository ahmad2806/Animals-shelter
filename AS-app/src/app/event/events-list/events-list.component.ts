import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';
import { EventModel } from '../event.model';
import { VolunteersService } from '../../volunteer/volunteers.service';
import { EventService } from '../event.service';
import { VolunteerModel } from '../../volunteer/volunteer.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit, DoCheck {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('dateInput') dateInputRef: ElementRef;
  @ViewChild('descriptionInput') desInputRef: ElementRef;
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
  i = 0;
  // for edit modal
  name = "";
  date;
  description = "";
  // *************************
  modelType = '';
  dismissModal = false;
  relatedTo: VolunteerModel[] = [];

  private eventList: EventModel[] = [];
  private eventListOnSearch: EventModel[] = [];
  private volunteersList: VolunteerModel[] = [];
  private relevantVolunteersToEvent: VolunteerModel[] = [];

  constructor(private volunteerService: VolunteersService, private eventService: EventService) {

    this.eventList = this.eventService.generalEvents;
    console.log(eventService.generalEvents);
    this.eventListOnSearch = eventService.generalEvents;
    this.volunteersList = volunteerService.volunteers;


  }

  ngDoCheck() {
    //  console.log("asdfasd");
    if (this.eventService.generalEvents != this.eventListOnSearch) {
      this.eventList = this.eventService.generalEvents;

      this.eventListOnSearch = this.eventService.generalEvents;
    }
  }

  ngOnInit() {

  }

  addToList(item, i) {
    const index = this.eventList[i].didntArrived.indexOf(item);
    this.eventList[i].arrived.push(this.eventList[i].didntArrived[index]);
    this.eventList[i].didntArrived.splice(index, 1);
    this.eventService.generalEvents =this.eventList ;
    //  console.log(i);
  }
  delFromList(item, i) {
    const index = this.eventList[i].arrived.indexOf(item);
    this.eventList[i].didntArrived.push(this.eventList[i].arrived[index]);
    this.eventList[i].arrived.splice(index, 1);
    this.eventService.generalEvents =this.eventList ;
  }

  addToRelativeList(item, i) {
    const index = this.relevantVolunteersToEvent.indexOf(item);
    this.relatedTo.push(this.relevantVolunteersToEvent[index]);
    this.relevantVolunteersToEvent.splice(index, 1);


  }
  delFromRelativeList(item, i) {
    const index = this.relatedTo.indexOf(item);
    this.relevantVolunteersToEvent.push(this.relatedTo[index]);
    this.relatedTo.splice(index, 1);


  }

  arrayOfVolunteers(i) {
    // console.log(i);

    this.i = i;
    this.name = this.eventList[i].name;
    this.date = this.eventList[i].date;
    this.description = this.eventList[i].description;
    this.relevantVolunteersToEvent = [];
    let related = this.eventList[i].relativeTo;

    for (let index = 0; index < this.volunteersList.length; index++) {
      for (let index1 = 0; index1 < related.length; index1++) {
        if (this.volunteersList[index].id == related[index1].id) {
          break;
        } else if (this.volunteersList[index].id != related[index1].id && index1 == related.length - 1) {
          this.relevantVolunteersToEvent.push(this.volunteersList[index]);
        }

      }

    }
    this.relatedTo = related;

  }

  onAddEvent(back) {
    // console.log(this.i);

    let i = this.i;

    const eventName = this.nameInputRef.nativeElement.value;
    // console.log(eventName);
    const eventDate = this.dateInputRef.nativeElement.value;
    const eventDescription = this.desInputRef.nativeElement.value;
    if (eventName == "") {
      alert("תשלים את הנתונים הנדרשים");
    }
    else {
      this.dismissModal = true;
      this.eventList[i].name = eventName;
      this.eventList[i].date = eventDate;
      this.eventList[i].description = eventDescription;
      this.eventList[i].type = this.modelType;
      this.eventList[i].relativeTo = this.relatedTo;
      this.eventService.generalEvents =this.eventList ;
      back.click();



    }

  }
  index(i) {
    this.i = i;
  }
  removeEvent() {
    // console.log(this.i);
    this.eventService.deletedEvents.push(this.eventList[this.i]);
    this.eventList.splice(this.i, 1);
    this.eventService.generalEvents =this.eventList ;
  }

  update(thisdate) {
    this.eventList = [];
    if (thisdate.value == "") {

      this.eventList = this.eventListOnSearch;
    }
    else {
      for (let i = 0; i < this.eventListOnSearch.length; i++) {
        for (let j = 0; j < 10; j++) {
          console.log(thisdate.value);

          if (this.eventListOnSearch[i].date == undefined)
            break;
          if (thisdate.value[j] != this.eventListOnSearch[i].date[j] && thisdate.value[j] != '-')
            break;
          else if (j == 9) {
            this.eventList.push(this.eventListOnSearch[i]);
          }
        }
      }
    
    }
    //     for(let i=0;i<this.eventList[0].date.length;i++){
    //       console.log(this.eventList[0].date[i]);

    //     }
    //     console.log("asdasdasd");
    //     for(let i=0;i<thisdate.value.length;i++){
    //       console.log(thisdate.value[i]);

    //     }
    //  let  time = this.eventList[0].date[0];
    this.eventService.generalEvents =this.eventList ;
  }


}
