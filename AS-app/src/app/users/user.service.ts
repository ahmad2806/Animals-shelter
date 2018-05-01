import { Injectable } from '@angular/core';
import { User } from './user.model';
@Injectable()
export class UserService {
  isCreating:Boolean;
  isEditing:Boolean;
  public usersList:User[]=[];
    constructor() { 
    this.isCreating=false; // on add
    this.isEditing=false; // on edit
    this.usersList = [ // users collection
    new User("Adi","","adi@gmail.com","admin","1234",true,true,true,false),
    new User("Omar","053982781","omar.b__95@hotmail.com","omarbo","1995",true,true,true,false),
    new User("Ibrahim","0549927495","ibrahimidkedek@gmail.com","ibrahimid","1994",true,true,true,false),
    new User("Montaser","0509382929","montaser_12@hotmail.com","montaserja","1995",true,true,true,false),
    new User("Ahmad","0524651749","ahmadloxiz@gmail.com","ahmadhs","1994",true,true,true,true),
    new User("Mohammad","0523601320","salman@gmail.com","salman","1995",true,true,true,false),
  ]
  }
  public get UsersList(){
    return this.usersList;
  }
}
