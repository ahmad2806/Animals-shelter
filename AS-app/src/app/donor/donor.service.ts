import { Injectable } from '@angular/core';
import { DonorModel } from './donor.model';
import { EventModel } from '../event/event.model';

@Injectable()
export class DonorService {

  public Donor:DonorModel[]=[
    new DonorModel("name","id",new Date,"address","phone","homePhone","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","קרן",15654,[]),
    new DonorModel("אברהים","2058*****",new Date,"ירושלים","0549927495","","ibrahimidkedke@gmail.com","פרטי",1231,[]),
    new DonorModel("victor","id",new Date,"address","phone","homePhone","email","פרטי",31243,[]),
    new DonorModel("omar","id",new Date,"address","phone","homePhone","email","קרן",43243,[]),
    new DonorModel("ahmad","id",new Date,"address","phone","homePhone","email","קרן",3423,[]),
    new DonorModel("dia","id",new Date,"address","phone","homePhone","email","פרטי",12312,[]),
    new DonorModel("adi","id",new Date,"address","phone","homePhone","email","פרטי",31231,[]),
    new DonorModel("no name","id",new Date,"address","phone","homePhone","email","קרן",500,[])
  ];

  constructor() { }
  public get donor(){
    return this.Donor;
  }
  
   public add(don:DonorModel){
    this.Donor.push(don);
   }

}
