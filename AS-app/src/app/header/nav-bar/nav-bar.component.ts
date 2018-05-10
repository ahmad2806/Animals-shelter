import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  Vonclick(){
    this.router.navigate(["/volenteer"]);
  }
  UsersonClick(){
    this.router.navigate(["/users"]);
  }
  HomeonClick(){
    this.router.navigate(["/main"]);
  }
}
