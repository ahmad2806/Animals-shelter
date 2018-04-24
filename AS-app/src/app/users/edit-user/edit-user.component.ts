import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public edit:User;
  constructor(private userService:UserService) {
    this.edit=this.userService.UsersList[this.userService.userToEdit];
   }
  ngOnInit() {
    // this.edit=this.userService.UsersList[this.userService.userToEdit];
  }

}
