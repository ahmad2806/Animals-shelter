
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { VolunteerModel } from '../../volunteer/volunteer.model';
import { EventService } from '../event.service';
import { EventModel } from '../event.model';
import { VolunteersService } from '../../volunteer/volunteers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('dateInput') dateInputRef: ElementRef;
  @ViewChild('descriptionInput') desInputRef: ElementRef;
  searchFor = 'event';
  modelType = '';
  relatedTo: VolunteerModel[] = [];
  arrived: VolunteerModel[] = [];
  didntarrived: VolunteerModel[] = [];
  

  constructor(private volunteerService: VolunteersService, private eventService: EventService,private router: Router) {
    eventService.relatedTo = this.relatedTo;

  }
  addToList(item) {
    const index = this.volunteerService.volunteers.indexOf(item);
    this.relatedTo.push(this.volunteerService.volunteers[index]);
    this.volunteerService.volunteers.splice(index, 1);
  }
  delFromList(item) {
    const index = this.relatedTo.indexOf(item);
    this.volunteerService.volunteers.push(this.relatedTo[index]);
    this.relatedTo.splice(index, 1);
  }

 
  onAddEvent(dis) {

    const eventName = this.nameInputRef.nativeElement.value;
    const eventDate = this.dateInputRef.nativeElement.value;
    let d=new Date(eventDate);
    const eventDescription = this.desInputRef.nativeElement.value;
    if(eventName == "" || this.relatedTo.length == 0 ){
      alert("תשלים את הנתונים הנדרשים");
    }
    else{
      const eventAdded = new EventModel(eventName,this.modelType,d,eventDescription,this.relatedTo,this.arrived,this.relatedTo); 
      this.eventService.add(eventAdded);
      
      dis.click();
    }  

  }



  ngOnInit() {
  }

}
