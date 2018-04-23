import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users:User[];
  constructor(private userService:UserService) {
  }
  ngOnInit() {
    
  }
  onRemove(removeUser:User){
    if(removeUser.username=="admin"){
      alert("the admin cannot be removed");
    }else{
   let index=this.userService.UsersList.indexOf(removeUser);
   this.userService.UsersList.splice(index,1);
    }
  }
}
