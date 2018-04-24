import { Injectable } from '@angular/core';
import { VolunteerModel } from './volunteer.model';
import { FreeDayes } from './free-days.model';
import { EmailValidator } from '@angular/forms';

@Injectable()
export class VolunteersService {
  volunteers:VolunteerModel[]=[
    new VolunteerModel("אחמד","20541774",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("מונתצר","20541744",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("מוחמד","205317744",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("עומר","205417644",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","2054227744",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205347744",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","2057617744",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","2054654",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205417744",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","2012317744",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","2054177444",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","205455444",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","20342744",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
                        true,false,"software engineering"),
    new VolunteerModel("אבראהים","105417744",new Date,"beit-hanina","0524651749","",
                        "025859294","mail","cat",new FreeDayes(true,false,true,true,true,false,false),
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
