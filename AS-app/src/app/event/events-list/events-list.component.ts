import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventModel } from '../event.model';
import { VolunteersService } from '../../volunteer/volunteers.service';
import { EventService } from '../event.service';
import { VolunteerModel } from '../../volunteer/volunteer.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('dateInput') dateInputRef: ElementRef;
  @ViewChild('descriptionInput') desInputRef: ElementRef;
  i=0;
  // for edit modal
  name="";
  date;
  description="";
// *************************
  modelType = '';
  dismissModal=false;
  relatedTo: VolunteerModel[] = [];

  private eventList:EventModel[] = [];
  private volunteersList:VolunteerModel[]=[];
  private relevantVolunteersToEvent:VolunteerModel[]=[];

  constructor(private volunteerService: VolunteersService, private eventService: EventService) {
    this.eventList=eventService.commingSoonEvents;
    this.volunteersList=volunteerService.volunteers;
    console.log(this.eventList);
    
  }


  ngOnInit() {
   
  }

  addToList(item,i) {
    const index = this.eventList[i].didntArrived.indexOf(item);
    this.eventList[i].arrived.push(this.eventList[i].didntArrived[index]);
    this.eventList[i].didntArrived.splice(index, 1);
    //  console.log(i);
  }
  delFromList(item,i) {
    const index = this.eventList[i].arrived.indexOf(item);
    this.eventList[i].didntArrived.push(this.eventList[i].arrived[index]);
    this.eventList[i].arrived.splice(index, 1);
  }

  addToRelativeList(item,i){
    const index = this.relevantVolunteersToEvent.indexOf(item);
    this.relatedTo.push(this.relevantVolunteersToEvent[index]);
    this.relevantVolunteersToEvent.splice(index, 1);


  }
  delFromRelativeList(item,i){
    const index = this.relatedTo.indexOf(item);
    this.relevantVolunteersToEvent.push(this.relatedTo[index]);
    this.relatedTo.splice(index, 1);
   

  }

  arrayOfVolunteers(i){
    console.log(i);
    
    this.i=i;
    this.name=this.eventList[i].name;
    this.date=this.eventList[i].date;
    this.description=this.eventList[i].description;
    this.relevantVolunteersToEvent=[];
    let related=this.eventList[i].relativeTo;

    for (let index = 0; index < this.volunteersList.length; index++) {
      for (let index1 = 0; index1 < related.length; index1++) {
        if(this.volunteersList[index].id==related[index1].id){
          break;
        }else if(this.volunteersList[index].id!=related[index1].id&&index1==related.length-1){
          this.relevantVolunteersToEvent.push(this.volunteersList[index]);
        }
        
      }
      
    }
    this.relatedTo=related;

  }

  onAddEvent() {
    // console.log(this.i);
    
    let i=this.i;
    
    const eventName = this.nameInputRef.nativeElement.value;
    // console.log(eventName);
    const eventDate = this.dateInputRef.nativeElement.value;
    const eventDescription = this.desInputRef.nativeElement.value;
    if(eventName == "" || eventDate == "" ){
      alert("תשלים את הנתונים הנדרשים");
    }
    else{
      this.dismissModal=true;
      this.eventList[i].name=eventName;
      this.eventList[i].date=eventDate;
      this.eventList[i].description=eventDescription;
      this.eventList[i].type=this.modelType;
      this.eventList[i].relativeTo=this.relatedTo;
      

    
    }  
   
  }
  index(i){
    this.i=i;
  }
  removeEvent(){
    console.log(this.i);
    this.eventList.splice(this.i,1);
  }

}
