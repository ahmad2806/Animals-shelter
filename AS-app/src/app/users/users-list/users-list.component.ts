import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';
import { equal } from 'assert';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  private EditingUser: User;
  swap: boolean = false;
  constructor(private userService: UserService) {
  }
  ngOnInit() {

  }
  onCreate() {
    this.userService.isCreating = !this.userService.isCreating;
  }
  onRemove(removeUser: User) {
    if (removeUser.username == "admin" || (removeUser.VolPer==removeUser.AdoptPer==removeUser.DonorPer==true)) {
      alert("the admin cannot be removed");
    } else {
      let index = this.userService.UsersList.indexOf(removeUser);
      this.userService.UsersList.splice(index, 1);
    }
  }
  onEdit(editUser: User) {
    this.userService.isEditing = true;
    this.EditingUser = editUser;
  }
  onClose() {
    this.userService.isEditing = false;
  }

  onSumbit(form: NgForm,Vper,Dper,Aper,Freeze) {
    let newUser: User;
    let swap: boolean = false;
    let index: number;
    for (let index = 0; index < this.userService.usersList.length; index++) {
      if (index == this.userService.usersList.length - 1) {
        swap = true;
      }
      if (this.userService.usersList[index].username == form.value.username) {
        if (this.EditingUser.username == form.value.username) {
          newUser = new User(form.value.name, form.value.phone, form.value.email, form.value.username, form.value.password,Vper,Dper,Aper,Freeze);
          index = this.userService.usersList.indexOf(this.EditingUser);
          this.userService.usersList[index] = newUser;

          // this.userService.usersList.push(newUser);
          // this.onRemove(this.EditingUser);
          break;
        }
        else {
          alert("username is already in use");
          return;
        }
      } else {
        if (swap == true) {
          newUser = new User(form.value.name, form.value.phone, form.value.email, form.value.username, form.value.password,Vper,Dper,Aper,Freeze);
          index = this.userService.usersList.indexOf(this.EditingUser);
          this.userService.usersList[index] = newUser;
          // this.userService.usersList.push(newUser);
          // this.onRemove(this.EditingUser);
          break;
        }
      }
    }
    // index=this.userService.usersList.indexOf(this.EditingUser);
    // this.userService.usersList[index]=newUser;
    this.userService.isEditing = false;


    // console.log(this.EditingUser.name);
    // console.log(form.value.name);
    // console.log(form.value.name);
    // console.log(this.EditingUser.name);

  }
}
