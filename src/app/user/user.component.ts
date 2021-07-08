import { Component, Input, OnInit } from '@angular/core';
import { User } from '../app-interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _user!: User;
  @Input()
  set user(user: User){
    this._user = user;
    this.counter++;
  }
  // tslint:disable-next-line:typedef
  get user() {
    return this._user;
  }
  counter = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this._user);
    console.log(this.counter);
  }

}
