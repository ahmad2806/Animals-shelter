import { Component, OnInit } from '@angular/core';
import { volunteer } from '../volunteer.model';
import { VolunteerServiceService } from '../volunteer-service.service';

@Component({
  selector: 'app-create-vol',
  templateUrl: './create-vol.component.html',
  styleUrls: ['./create-vol.component.css']
})
export class CreateVolComponent implements OnInit {
private vol:volunteer;
private gender;
private car;
private incar;

  constructor(public volservice:VolunteerServiceService) { }

  ngOnInit() {
  }
  onclick(Name,familyname,
    ID,address,male,date,
    mail , tel,tel1,
    tel2, type,career,car,incar,sunday
    ,monday,tuesday,wednesday,thursday,friday){
      if(male==true){
        this.gender="male";
      }else{
        this.gender="female";
      }

      if(car==true){
        this.car="yes";
       }else{
        this.car="no";
       }
       if(incar==true){
        this.incar="yes";
       }else{
        this.incar="no";
       }
      this.vol=new volunteer(Name,familyname,ID,address,this.gender,date,mail,tel,tel1,tel2,type,career,this.car,this.incar,!sunday,!monday,!tuesday,!wednesday,!thursday,!friday);
   this.volservice.add(this.vol);

  }

}
