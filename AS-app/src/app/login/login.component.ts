import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppboolService } from '../appbool.service';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clicked='';
  @Output() Loginform=true;
  constructor(private router: Router,private app:AppboolService, private usServer: UserService) { }

  ngOnInit() {
  }

  calltype(value){
    this.clicked=value;
  }

  change(){
      this.Loginform=false;

  }

  clk(){
    
  }
  onFormSubmit(userForm){
    for (let index = 0; index < this.usServer.usersList.length; index++) {
      if (this.usServer.usersList[index].username == userForm.value.username) {
        if (this.usServer.usersList[index].password == userForm.value.password) {
          if (this.usServer.usersList[index].Freeze == false) {
            this.router.navigate(["/Header/main"]);
            this.app.logged = true;
            return;
          } else {
            alert("please contact the admin");
            return;
          }
        }
      }
      if (index == this.usServer.usersList.length - 1) {
        alert("אחד או יותר מהנתונים שגויים");
        return;
      }
    }
}
}