import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  constructor(private UserService:UserService ) { }
    
  ngOnInit() {
    
  }
  
}
