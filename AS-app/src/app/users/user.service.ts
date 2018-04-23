import { Injectable } from '@angular/core';
import { User } from './user.model';
@Injectable()
export class UserService {
  isCreating:Boolean;
  public usersList:User[]=[];
    constructor() { 
    this.isCreating=false;
    this.usersList = [
    new User("adi","053982781","adi@gmail.com","admin","1234",true,true,true),
    new User("omar","053982781","adi@gmail.com","omarbo","1234",true,true,false),
    new User("ibrahim","053982781","adi@gmail.com","ibrahim","1234",false,true,true),
    new User("montaser","053982781","adi@gmail.com","ahmad","1234",true,false,true)

  ]
  }
  public get UsersList(){
    return this.usersList;
  }
}
