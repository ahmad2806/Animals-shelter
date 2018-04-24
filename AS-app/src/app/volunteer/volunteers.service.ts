import { Injectable } from '@angular/core';
import { VolunteerModel } from './volunteer.model';
import { FreeDayes } from './free-days.model';
import { EmailValidator } from '@angular/forms';

@Injectable()
export class VolunteersService {
  volunteers:VolunteerModel[]=[
    new VolunteerModel("אחמד","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("מונתצר","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("מוחמד","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("עומר","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294",new EmailValidator,"cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
  ];
  constructor() { 
  }
  public get Volunteers(){
    return this.volunteers.slice;
  }
  
   public add(vol:VolunteerModel){
    this.volunteers.push(vol);
   }

}
