import { Component, OnInit, ElementRef } from '@angular/core';
import { VolunteerModel } from '../volunteer.model';

import { VolunteersService } from '../volunteers.service';
import { NgForm } from '@angular/forms';
import { FreeDayes } from '../free-days.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vol',
  templateUrl: './create-vol.component.html',
  styleUrls: ['./create-vol.component.css']
})
export class CreateVolComponent implements OnInit {
private volunteer:VolunteerModel;
private week:FreeDayes;
private gender;
private car;
private incar;
private oneid=false;


  constructor(public volservice:VolunteersService,private router: Router) { }

  ngOnInit() {
  }
 
  onSubmit(form:NgForm){
    let i=0;
    let notAvailable:boolean=true;
    for(i;i<this.volservice.volunteers.length;i++){
      if(form.value.ID==this.volservice.volunteers[i].id){
        notAvailable=false;
        
      }
    }
  if(notAvailable==true){
    this.oneid=false;
     this.volunteer=new VolunteerModel(form.value.name,form.value.ID,form.value.date
    ,form.value.address,form.value.extranum,form.value.phonenum,form.value.homenum,form.value.email,form.value.type
  ,this.week,this.car,this.incar,form.value.job);

  this.volservice.add(this.volunteer);
  // console.log(form.value.date);
}else{
  this.oneid=true;
}
    
    
  }
  days(saturday,sunday,monday,tuesday,wednesday,thursday,friday,car,incar){
    // this.saturday=saturday;
    // this.sunday=sunday;
    // this.monday=monday;
    // this.tuesday=tuesday;
    // this.wednesday=wednesday;
    // this.thursday=thursday;
    // this.friday=friday;
 this.car=car;
 this.incar=incar;
   this.week=new FreeDayes(sunday,monday,tuesday,wednesday,thursday,friday,saturday);
  }


}
