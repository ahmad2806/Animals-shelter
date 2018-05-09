import { Injectable } from '@angular/core';
import { DonorModel } from './donor.model';
import { EventModel } from '../event/event.model';

@Injectable()
export class DonorService {

  Donor:DonorModel[]=[
    new DonorModel("name","id",new Date,"address","phone","homePhone","email","donorType",[]),
    new DonorModel("ibra","id",new Date,"address","phone","homePhone","email","donorType",[]),
    new DonorModel("victor","id",new Date,"address","phone","homePhone","email","donorType",[]),
    new DonorModel("omar","id",new Date,"address","phone","homePhone","email","donorType",[]),
    new DonorModel("ahmad","id",new Date,"address","phone","homePhone","email","donorType",[]),
    new DonorModel("dia","id",new Date,"address","phone","homePhone","email","donorType",[]),
    new DonorModel("adi","id",new Date,"address","phone","homePhone","email","donorType",[]),
    new DonorModel("no name","id",new Date,"address","phone","homePhone","email","donorType",[])
  ];

  constructor() { }
  public get donor(){
    return this.donor.slice;
  }
  
   public add(don:DonorModel){
    this.donor.push(don);
   }
}
