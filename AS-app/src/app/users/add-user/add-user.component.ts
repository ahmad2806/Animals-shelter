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
        return;
      }
    }
    if(Vper==Dper==Aper==false){
      alert("please give at least 1 permission for the new user");
      return;
    }
    if(this.password!=this.password2){
      alert("confirm password isn't correct")
      return;
    }
    else{ //on Success
      newUser=new User(this.name,this.tel,this.email,this.username,this.password,Vper,Dper,Aper,false);
      this.UserService.usersList.push(newUser);
      this.UserService.isCreating=!this.UserService.isCreating;
    }
  }
  onBack(){
    this.UserService.isCreating=!this.UserService.isCreating;
  }
  
  
}
