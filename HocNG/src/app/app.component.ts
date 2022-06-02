import { Component } from '@angular/core';
import {STUDENTS} from "./SINHVIEN";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HocNG';
  sutudens = STUDENTS;
  constructor() {
    console.log(this.sutudens);
  }
}
