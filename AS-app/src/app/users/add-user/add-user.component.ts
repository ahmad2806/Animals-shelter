import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('f') newUserForm: NgForm;
  successMessage="User have been added succesfully"
  name="";
  tel="";
  email="";
  username="";
  password="";
  password2="";
  constructor(private UserService:UserService) {

   }

  ngOnInit() {
  }
  onSumbit(Vper,Dper,Aper){
    let newUser:User;
    for (let index = 0; index < this.UserService.UsersList.length; index++) {
      if(this.username==this.UserService.UsersList[index].username){
        alert("username is already in use");
        break;
      }
    }
    if(this.password==this.password2){
      newUser=new User(this.name,this.tel,this.email,this.username,this.password,Vper,Dper,Aper);
      this.UserService.usersList.push(newUser);
      this.UserService.isCreating=!this.UserService.isCreating;
    }
    else{
      alert("confirm password isn't correct")
    }
  }
  onBack(){
    this.UserService.isCreating=!this.UserService.isCreating;
  }
  
}
