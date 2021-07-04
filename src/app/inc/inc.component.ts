import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inc',
  templateUrl: './inc.component.html',
  styleUrls: ['./inc.component.css']
})
export class IncComponent implements OnInit {
  add = 0;
  constructor() { }

  ngOnInit(): void {
  }
  increment(): void{
    this.add++;
  }

}
