import { Component, OnInit, Input } from '@angular/core';
import { VolunteerModel} from '../volunteer.model';
import { VolunteerComponent } from '../volunteer.component';


@Component({
  selector: 'app-one-vol',
  templateUrl: './one-vol.component.html',
  styleUrls: ['./one-vol.component.css']
})
export class OneVolComponent implements OnInit {
 @Input() vol:VolunteerModel;
s=false;

  constructor() {
  
   }

  ngOnInit() {
 
  }

}
