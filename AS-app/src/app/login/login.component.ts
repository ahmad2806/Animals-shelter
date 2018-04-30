import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppboolService } from '../appbool.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clicked='';
  @Output() Loginform=true;
  constructor(private router: Router,private app:AppboolService) { }

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
    if(userForm.value.username=="m" && userForm.value.password=="m")
    {

      this.router.navigate(["/Header/main"]);
      this.app.logged=true;
    }
    else{
      alert("אחד או יותר מהנתונים שגויים");
    }
  }
}
