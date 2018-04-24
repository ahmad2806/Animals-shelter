import { Injectable } from '@angular/core';
import { User } from './user.model';
@Injectable()
export class UserService {
  isCreating:Boolean;
  isEditing:Boolean;
  userToEdit:number;
  public usersList:User[]=[];
    constructor() { 
    this.isCreating=false; // on add
    this.isEditing=false;
    this.usersList = [ // users collection
    new User("adi","053982781","adi@gmail.com","admin","1234",true,true,true),
    new User("omar","053982781","omar.b__95@hotmail.com","omarbo","49027",true,true,false),
    new User("ibrahim","05021931","ibra@gmail.com","ibrahimid","1994",false,true,true),
    new User("montaser","0502013213","montaser@gmail.com","montaserja","1995",true,false,true),
    new User("ahmad","0526019121","ahmad@gmail.com","ahmadhs","1993",true,false,true),
  ]
  }
  public get UsersList(){
    return this.usersList;
  }
}
