import { Component, OnInit, Input } from '@angular/core';
import { volunteer } from '../volunteer.model';

@Component({
  selector: 'app-one-vol',
  templateUrl: './one-vol.component.html',
  styleUrls: ['./one-vol.component.css']
})
export class OneVolComponent implements OnInit {
 @Input() vol:volunteer
  constructor() { }

  ngOnInit() {
  }

}
