import { Component, OnInit, ElementRef, Input } from '@angular/core';
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
  @Input() volunteersToView:VolunteerModel[];
private volunteer:VolunteerModel;
private week:FreeDayes;
private gender;
private car;
private incar;
private tempform;
private oneid=false;
private volunteerIMG="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ4NDg0NDQ0ODQ0ODQ0NDQ8NDQ0NFREWFhURFRUYHSkgGBolHRUVITEhJSkrLjAuFx8zODM4NygtOisBCgoKDQ0NDg0NDisZHxkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EAD8QAAIBAgIGBwcCBAQHAAAAAAABAgMRBCEFEjFBUXEGEyJSYYGRMnKhscHR4SNCM2KywnOi8PEWJDRDU4KD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENpPpDRo3jT/WqLbZ9iL8Xv8AICZOTE6Tw9LKdaCa/anrS9FmUzG6WxFe+vUaj3IdmH58zhAuVTpNhVsVWfKCS+LRr/4qof8Ajrf5PuVEAXOn0lwstvWQ96F/6WyQw2kKFX+HVhJ93WtL0eZ88AH0wFG0fpzEUGlrOpDuVHfLwe1Fu0bpCniYa8HmspQftQfj9wOsAAAAAAAAAAAAAMGQAAAAAAAAAPNWpGEXKTUYxV23sSPRTOkOlnXn1cH+jB7v+5LvcuAGdM6dnXbp0rwo7OE6nPgvAhQAAAAAAAAAB2aJxjw9eE79m6jUW5we37+RxgD6JQxtCo7Qq05vhGcW/Q6D5mT+hekEoNU68nKm8lUecoc+KAtoMJ3zWaexrejIAAAAAAAAAAAAAAAAAAAQ3SfHOlR6uLtOtePioL2n8l5lMJXpLiOsxU1uppU15Zv4tkUAAAAAAAAAAAAGUm8lm3kktrZP4bQy6iSnbrZq6fcazS+4FfBlpp2eTWTXBmALP0V0m3/y03mk3Sb4b4fVeZZT5tSqShKM4u0otSi+DR9CwOJValCqtk43twe9etwN4AAAAAAAAAAAAAAAAAA+cYqetUqS705y9WzUeprN838zyAAAAAAAAAPUIuTSSbbySWbbOjB4CpWfZVo75vKK+5Y8Bo6nQWXam9s3t8uCA5tE6LVK1SpZ1Ny2qH5JQACr6coaleTWyaU1ze34/Mjyf6S0rwpz4ScXyav9CAAFo6HYq6qUHutUhyeUvjb1KuSXR+v1eKpPdJum+Usl8bAXoAAAAAAAAAAAAAAAAAAfPNJU9SvWjwqztyu7HMS3Senq4ub78YT+FvoRIAAAAd2B0XVrWl7EO9LfyW8nMJoqjSz1deXenn6LYgK/hdH1qvsxer3pdmP58iZwmhKcLOo+slw2QXlvJUAYSSVkkktiWSRkAAAAODTkL4afhqy/zL7sqxb9JK9Cr/hyforlQAHqnNxlGS2xakuadzyAPpcZJpNbGk15mTk0VPWw1B8aUPVKx1gAAAAAAAAAAAAAAAAVTplC1WlLvU5R9JX/ALivFo6Zx7NB+NVeqj9irgCU0HgVVk5zV4Qay3SlwfgRZZuj1uo/+kr88vwBJAAAAAAAAAADRpD+BW/wqn9LKcW7Sjth6vuNeuX1KiBk79KaJqYazfbpy9mollya3Mj2fQ4Uo1sPGE1rRnShrLnFAaNAf9JR9z6skDRgcP1NKnSvfUio34+JvAAAAAAAAAAAAAAAAArnTJ9iiv55/JfcqxZOmc+1QjwjUl6tL6FcjFu9k3ZXdty4gYLB0an+nUjwmpeqt/aV8l+jc7VJx70L+af5YFhAAAAAAAAAAEfp6dsPJd6UI/G/0KuTvSWrlTp+Lm/kvqQQBn0jDR1acFwhBekUfPcHR6yrTp9+cY+TeZ9GAAAAAAAAAAAAAAAAAAACvaW0RWxWKvlClGEYqcndve7R5vfY3Y7AUcLgq8YLNwSlN5yk7q139CbI3T+Fq16HV0tVvWTkm7NxW5edvQCinXout1denJ7G9V8nkasThatJ2qU5w95ZPk9jNIF4Bw6IxirU1d/qQspre+EvM7gAAAAAAAcGmMb1NNpP9Saaj4LfICC0tiOsrzazS7EeS/NzjB34LRGIr2cabUX++fYj8dvkB3dEsJr1nWa7NKNl78lb5X9UW85dGYKOHoxpLNrOUu9N7WdQAAAAAAAAAAAAAAAAAAAAABhpNWaTT2p5o4a+hcLU20Yp8YXh8jvAENDo7TpyU6VWrTkuOrOLXBq2aPevaTg/aTtw1vFHbjsbChHWlm37MVtk/t4kdVj1sVPZJpSXnnYDcDjhiJRykr247TdHEwe9rmmBuBplioLZd8kc9TEyezsrw2gdNauo5bZcOHM2S0Dh5yc6jqVJPvTsuVlbIjCb0bpGFdd2aXag/muKA2YfR9Cl7FKEXx1by9XmdIAAAAAAAAAAAAAAAAAAAAAAABhu2byXFnJW0ph4baib4Q7XyA7DRjMTGjTc5bti3yluSIyr0hgvYpSl4yko/K5FaQx88Q1rJRUb2jG9r8eYGnFYidWbnN3b9EuC8Cdw38OHuR+SK6WHCO9Kn7kfkB6q0lLbt47zjqYeS3XXFHeAIsEm4p7UnzR56qHdj6ARxwUqkoSUotqUXdNFhaUU2klZN5IrYFw0bjVXp62ySynHg/sdRTcDjJ0J68bO6s4u9miXpdIV++k14wkn8HYCbBw0dLYef79V8Jpx+Ow7YyTV001xTugMgAAAAAAAAAAAAAPFarGnFynJRitrZX8fpuc7xpXhHvfvf2AmsXjqVH25K/dWcvQhsVp+bypxUF3pdqXpsXxIhu+bze9veYA218RUqZznKXN5ehqAAAAATmjJXox8Lr4kGS2hp9mceEk/VfgCQAAAAAacZK1Kb/la9civk1padqVu9JLy2/QhQAAAHulWnB3hKUX/ACto8ACWw2nascqiVRcfZl9iYwmkqNbKMrS7kuzL8lRAF6BWMBpmpStGd6kPH21ye/zLFhsTCrHWhK638U+DW4DaAAAAAGrE140oOc3ZL1b4LxNpWNPYt1KvVp9inlznvf0A5sfjZ15XllFezBbIr7+JygAAAAAAAAADt0TUtVt3oteazOI90p6soyX7WmBYwE7pNbHmuQAAACK0zUvKMeCu+b/2I424qpr1JS3N5clkjUAAAAAAAAAN2ExU6M9eDs963SXBmkAXLA4uNeCnHLdKO+MuB0FS0Ti3Rqp37ErRny4+RbQAAANlGlJybk9rbb5svJRmrZcMgMAAAAAAAAAAAAAJvRdXWp23w7Plu/14HWQeja2pUV9kuy/oycAHPpCrqU5Pe+yubOghtK1taeqtkMv/AG3gcQAAAAAAAAAAAAAXTBzcqVOT2unBvm4opZc8CrUaS4Uqf9KA3gAAik1/bn78vmABrAAAAAAAAAAAAACzAACuVvbl70vmAB4AAAAAAAAAAAAAC7Yb+HD3IfJAAbAAB//Z";


  constructor(public volservice:VolunteersService,private router: Router) { }

  ngOnInit() {
  }

image(im){
  console.log(im);
  this.volunteerIMG = im.target.files[0];

  let reader = new FileReader();

  reader.onload = (e: any) => {
      this.volunteerIMG = e.target.result;
  }

  reader.readAsDataURL(im.target.files[0]);

}
  
 
  onSubmit(form:NgForm){
    this.tempform=form;
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
  ,this.week,this.car,this.incar,form.value.job,this.volunteerIMG);

  this.volservice.add(this.volunteer);
  this.router.navigate(['/Header/volenteer/VolunteersList']);

  // console.log(this.volunteer.date);
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
