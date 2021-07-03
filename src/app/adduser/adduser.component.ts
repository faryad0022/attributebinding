import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../app-interface';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddUserClicked = new EventEmitter<User[]>();
  users: User[] = [
    {
      email: 'a@a.com',
      password: '1234',
      address: 'valiasr 1'
    },
    {
      email: 'b@b.com',
      password: '12345',
      address: 'valiasr 2'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onAddUser(email: string, password: string, address: string, e: Event): void{
    // to prevent reset page after click
    e.preventDefault();
    const u: User = {
      email,
      password,
      address
    };
    this.users.push(u);
    this.onAddUserClicked.emit(this.users);
  }
}
