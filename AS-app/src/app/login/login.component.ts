import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppboolService } from '../appbool.service';
import { UserService } from '../users/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clicked='';
  username:"";
  password:"";
  hide = true;

  @Output() Loginform=true;
  constructor(private router: Router,private app:AppboolService, private usServer: UserService,private auth:AuthService) { }

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
  onSubmit(){
    for (let index = 0; index < this.usServer.usersList.length; index++) {
      if (this.usServer.usersList[index].username == this.username) {
        if (this.usServer.usersList[index].password == this.password) {
          if (this.usServer.usersList[index].Freeze == false) {
            this.router.navigate(["/Header/main"]);
            this.auth.login();
            this.usServer.activeUser=this.usServer.usersList[index];
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