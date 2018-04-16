import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clicked='';
  @Output() Loginform=true;
  constructor(private router: Router) { }

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
    if(userForm.value.username=="montaser" && userForm.value.password=="123")
    {
      this.router.navigate(["/volenteer"]);
    }
    else{
      alert("אחד או יותר מהנתונים שגויים");
    }
  }
}
