import { Injectable } from '@angular/core';
import { DonorModel } from './donor.model';
import { EventModel } from '../event/event.model';

@Injectable()
export class DonorService {

  public Donor:DonorModel[]=[
    new DonorModel("name","lastname","id",new Date,"address","phone","homePhone","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","קרן",15654,[],"discription"),
    new DonorModel("אברהים","lastname","2058*****",new Date,"ירושלים","0549927495","","ibrahimidkedke@gmail.com","פרטי",1231,[],"discription"),
    new DonorModel("victor","lastname","id",new Date,"address","phone","homePhone","email","פרטי",31243,[],"discription"),
    new DonorModel("omar","lastname","id",new Date,"address","phone","homePhone","email","קרן",43243,[],"discription"),
    new DonorModel("ahmad","lastname","id",new Date,"address","phone","homePhone","email","קרן",3423,[],"discription"),
    new DonorModel("dia","lastname","id",new Date,"address","phone","homePhone","email","פרטי",12312,[],"discription"),
    new DonorModel("adi","lastname","id",new Date,"address","phone","homePhone","email","פרטי",31231,[],"discription"),
    new DonorModel("no name","lastname","id",new Date,"address","phone","homePhone","email","קרן",500,[],"discription")
  ];

  constructor() { }
  public get donor(){
    return this.Donor;
  }
  
   public add(don:DonorModel){
    this.Donor.push(don);
   }

}
