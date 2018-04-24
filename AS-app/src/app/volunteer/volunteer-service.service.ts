import { Injectable } from '@angular/core';
import { volunteer } from './volunteer.model';

@Injectable()
export class VolunteerServiceService {
private vol_list: volunteer[]=[];
  constructor() {
    this.vol_list=[new volunteer("montaser","jafrah",31667838,"jabal al-mukaber","male",new Date(9, 11, 24),"montaser_12@hotmail.com",66565,646546,6545466,"cats","coder","yes","no",true,false,false,true,false,false),
    new volunteer("montaser","jafrah",21667838,"jabal al-mukaber","male",new Date(9, 11, 24),"montaser_12@hotmail.com",66565,646546,6545466,"cats","coder","yes","no",true,false,false,true,false,false),
    new volunteer("montaser","jafrah",41667838,"jabal al-mukaber","male",new Date(9, 11, 24),"montaser_12@hotmail.com",66565,646546,6545466,"cats","coder","yes","no",true,false,false,true,false,false),
    new volunteer("montaser","jafrah",51667838,"jabal al-mukaber","male",new Date(9, 11, 24),"montaser_12@hotmail.com",66565,646546,6545466,"cats","coder","yes","no",true,false,false,true,false,false),];
   }


   public add(vol:volunteer){
    this.vol_list.push(vol);
   }
   public get VolList(){
    return this.vol_list;
 }



}
