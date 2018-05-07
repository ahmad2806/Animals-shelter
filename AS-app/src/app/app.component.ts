import { Component } from '@angular/core';
import { AppboolService } from './appbool.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private app:AppboolService){}
  panelOpenState: boolean = false;

}
