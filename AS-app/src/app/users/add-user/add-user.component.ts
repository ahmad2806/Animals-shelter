import { Component, ViewChild, Input } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @ViewChild('f') newUserForm: NgForm;
  name = "";
  tel = "";
  email = "";
  username = "";
  password = "";
  password2 = "";
  hide = true;
  added=false;
  disappear = true;
  constructor(private UserService: UserService,private router:Router) {

  }
  onSumbit(Vper, Dper, Aper,reset,exit) {
    let newUser: User;
    for (let index = 0; index < this.UserService.UsersList.length; index++) {
      if (this.username == this.UserService.UsersList[index].username) {
        alert("username is already in use");
        return;
      }
    }
    if (Vper == false && Dper == false && Aper == false) {
      alert("please give at least 1 permission for the new user");
      return;
    }
    if (this.password != this.password2) {
      alert("confirm password isn't correct");
      return;
    }
    else { //on Success
      newUser = new User(this.name, this.tel, this.email, this.username, this.password, Vper, Dper, Aper, false);
      this.UserService.usersList.push(newUser);
      reset.click();
      exit.click();
    }
  }


}
