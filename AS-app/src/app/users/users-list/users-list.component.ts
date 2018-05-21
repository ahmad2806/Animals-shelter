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
  searchFor = 'users'
  today=Date.now();

  constructor(private userService: UserService) {
  }
  ngOnInit() {

  }

  onRemove(removeUser: User) {
    this.userService.UserRemoving = this.userService.usersList.indexOf(removeUser);
  }
  onEdit(editUser: User) {
    this.userService.UserEditing = editUser;
    
  }
 
  SumbitRemove() {
    if(this.userService.usersList[this.userService.UserRemoving].username=="admin"){
      alert("the admin cannot be removed");
      return;
    }
    this.userService.usersList.splice(this.userService.UserRemoving, 1);
    return;
  }
}
