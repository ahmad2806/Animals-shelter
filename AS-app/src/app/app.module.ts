import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './users/user.service';
import { Routes, RouterModule } from '@angular/router'
import { AppboolService } from './appbool.service';
import { VolunteersService } from './volunteer/volunteers.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ImageUploadModule } from "angular2-image-upload";
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';




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
import { AddUserComponent } from './users/add-user/add-user.component';
import { OneVolComponent } from './volunteer/one-vol/one-vol.component';
import { EventService } from './event/event.service';
import { FilterPipe } from './event/filter.pipe';
import { AddEventComponent } from './event/add-event/add-event.component';
import { EventsListComponent } from './event/events-list/events-list.component';
import { DonorComponent } from './donor/donor.component';
import { MatButtonModule,MatInputModule} from "@angular/material"
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { DonorListComponent } from './donor/donor-list/donor-list.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DonorService } from './donor/donor.service';
import {MatRadioModule} from '@angular/material/radio';
import { AddDonorComponent } from './donor/add-donor/add-donor.component';
import { FigurecardComponent } from './dash-board/figurecard/figurecard.component';



const appRoutes: Routes = [
  {
    path: 'Header',canActivate:[AuthGuard], component: HeaderComponent, children: [
      {
        path: 'volenteer', component: VolunteerComponent, children: [
          { path: 'addVolunteer', component: CreateVolComponent },
          {
            path: 'VolunteerEvents', component: EventComponent, children: [{ path: 'addEvent', component: AddEventComponent },
            { path: 'eventsList', component: EventsListComponent }]
          },
          { path: 'VolunteersList', component: VolListComponent }
        ]
       
      },
      {path:'donor',component: DonorComponent,children: [
        {path:'donorList',component:DonorListComponent},
        {path: 'donorEvent', component: EventsListComponent}
      ]
      },

      { path: 'users', component: UsersComponent },
      { path: 'main', component: DashBoardComponent }
    ]
  },

  { path: '', component: LoginComponent },

  { path: 'volenteer-events', component: EventComponent }

];


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
    OneVolComponent,
    AddUserComponent,
    FilterPipe,
    AddEventComponent,
    EventsListComponent,
    DonorComponent,
    DonorListComponent,
    EditUserComponent,
    AddDonorComponent,
    FigurecardComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ImageUploadModule.forRoot(),
    MatInputModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule
  ],
  providers: [UserService,
    VolunteersService,
    AppboolService, EventService,
    AuthService,AuthGuard,DonorService
  ],
  bootstrap: [AppComponent]




})
export class AppModule { }