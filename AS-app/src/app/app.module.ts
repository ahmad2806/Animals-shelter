import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { UserService } from './users/user.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { EventComponent } from './event/event.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { CreateVolComponent } from './volunteer/create-vol/create-vol.component';
import { VolListComponent } from './volunteer/vol-list/vol-list.component';
import { VolNavbarComponent } from './volunteer/vol-navbar/vol-navbar.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    HeaderComponent,
    UsersComponent,
    VolunteerComponent,
    EventComponent,
    NavBarComponent,
    CreateVolComponent,
    VolListComponent,
    VolNavbarComponent,
    UsersListComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
