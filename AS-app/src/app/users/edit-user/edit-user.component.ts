import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  constructor(private usServer: UserService) { }

  ngOnInit() {
  }

  onSumbit(form: NgForm, Vper, Dper, Aper, Freeze) {
    let newUser: User;
    let swap: boolean = false;
    let index: number;
    for (let index = 0; index < this.usServer.usersList.length; index++) {
      if (index == this.usServer.usersList.length - 1) {
        swap = true;
      }
      if (this.usServer.usersList[index].username == form.value.username) {
        if (this.usServer.UserEditing.username == form.value.username) {
          index = this.usServer.usersList.indexOf(this.usServer.UserEditing);
          newUser = new User(form.value.name, form.value.phone, form.value.email, form.value.username, form.value.password, Vper, Dper, Aper, Freeze);
          this.usServer.usersList[index] = newUser;
          break;
        }
        else {
          alert("username is already in use");
          return;
        }
      } else {
        if (swap == true) {
          index = this.usServer.usersList.indexOf(this.usServer.UserEditing);
          newUser = new User(form.value.name, form.value.phone, form.value.email, form.value.username, form.value.password, Vper, Dper, Aper, Freeze);
          this.usServer.usersList[index] = newUser;
          break;
        }
      }
    }
    return;

  }
}
