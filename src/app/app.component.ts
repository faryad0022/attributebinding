import { Component, OnInit } from '@angular/core';
import { User } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: User[] = [];
  ngOnInit(): void {
  }
  userAdded(users: User[]): void {
    this.users = users;
  }

}
