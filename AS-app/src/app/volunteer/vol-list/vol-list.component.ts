import { Component, OnInit } from '@angular/core';

import { VolunteersService } from '../volunteers.service';
import { VolunteerModel } from '../volunteer.model';

@Component({
  selector: 'app-vol-list',
  templateUrl: './vol-list.component.html',
  styleUrls: ['./vol-list.component.css']
})
export class VolListComponent implements OnInit {
  volunteersToView:VolunteerModel[]=[];
  pdisabled="previous disabled";
  ndisabled="next"
  lenght=this.volservice.volunteers.length;
  number =this.lenght/15;
  bakiNumber=this.lenght%15;
  CurrentPageNumber=0;
  previousPage=0;
  nextPage=1;
  Pages:number[]=[];
  thereIsBaki=false;



  

  constructor(public volservice:VolunteersService) {

   }

  ngOnInit() {

    // this.lenght=this.volservice.volunteers.length;
    // this.number =this.lenght/15;
    // this.bakiNumber=(this.lenght%15);
    // console.log(this.number);
    // console.log(this.bakiNumber);
    // console.log(this.lenght);

  
if(this.number<1){
  if(this.bakiNumber>0){
   
  
    for (let i = 0; i < this.bakiNumber;i++){
      this.volunteersToView[i]=this.volservice.volunteers[i];
      // console.log(this.v)
   
   
    }
  }
  }
  else{
    for (let i = 0; i < 15;i++){
      this.volunteersToView[i]=this.volservice.volunteers[i];
   
    }
  }
  if(this.bakiNumber>0){
    // this.number++;
   this.thereIsBaki=true;}

   for (let i = 0; i < this.number; i++) {
     this.Pages[i]=i+1;
     
   }

    
   
  }

  ChangePage(pressedPage){
  
    this.CurrentPageNumber=pressedPage;
    this.previousPage=pressedPage-1;
   this.nextPage=pressedPage+1;

   if(pressedPage==this.Pages.length-1){
    this.ndisabled="next disabled";
   }
   else{
    this.ndisabled="next";
   }
   if(this.CurrentPageNumber==0){
    this.pdisabled="previous disabled";
   }else{
    this.pdisabled="previous";
   }

    let n=15;
    if(pressedPage==this.Pages.length-1){
      if(this.thereIsBaki==true){
        n=this.bakiNumber;
      }
    }
    this.volunteersToView= [];
    for (let i = 0; i < n; i++) {
     this.volunteersToView[i]=this.volservice.volunteers[i+(pressedPage*15)];
      
    }

  }

}
