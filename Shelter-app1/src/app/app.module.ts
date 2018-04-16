import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { AdvSearchComponent } from './header/adv-search/adv-search.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { UsersComponent } from './users/users.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { EventInfoComponent } from './Volunteer/event-info/event-info.component';
import { VolListComponent } from './Volunteer/vol-list/vol-list.component';
import { CreateVolComponent } from './Volunteer/create-vol/create-vol.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    AdvSearchComponent,
    DashBoardComponent,
    UsersComponent,
    VolunteerComponent,
    EventInfoComponent,
    VolListComponent,
    CreateVolComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
