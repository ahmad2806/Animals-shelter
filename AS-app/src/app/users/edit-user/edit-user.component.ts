import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  constructor(private usServer: UserService, private router: Router) { }

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
          newUser = new User(form.value.name, form.value.phone, form.value.email, form.value.username, form.value.password, Vper, Dper, Aper, Freeze);
          index = this.usServer.usersList.indexOf(this.usServer.UserEditing);
          this.usServer.usersList[index] = newUser;
          break;
        }
        else {
          alert("username is already in use");
          return;
        }
      } else {
        if (swap == true) {
          newUser = new User(form.value.name, form.value.phone, form.value.email, form.value.username, form.value.password, Vper, Dper, Aper, Freeze);
          index = this.usServer.usersList.indexOf(this.usServer.UserEditing);
          this.usServer.usersList[index] = newUser;
          break;
        }
      }
    }
    // this.router.navigate(["/Header/users"]);
    
    return;

  }
}
