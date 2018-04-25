import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @ViewChild('f') newUserForm: NgForm;
  private EditingUser:User;
  constructor(private userService:UserService) {
  }
  ngOnInit() {
    
  }
  onCreate(){
    this.userService.isCreating=!this.userService.isCreating;
  }
  onRemove(removeUser:User){
    if(removeUser.username=="admin"){
      alert("the admin cannot be removed");
    }else{
   let index=this.userService.UsersList.indexOf(removeUser);
   this.userService.UsersList.splice(index,1);
    }
  }
  onEdit(editUser:User){
   this.userService.isEditing=true;
   let temp=editUser;
   this.EditingUser=editUser;
  }
}
