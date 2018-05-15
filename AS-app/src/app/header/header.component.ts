import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "240px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  signOut() {
    this.auth.logout();
    this.router.navigate(["/"]);
    console.log(this.auth.loggedIn);
  }
}
