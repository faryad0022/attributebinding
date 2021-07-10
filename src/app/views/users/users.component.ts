import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/app-interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[] = [
    {
      id: 1,
      address: 'valiasr 1',
      age: 30,
      email: 'a@a.come',
      password: '1234'
    },
    {
      id: 2,
      address: 'valiasr 2',
      age: 33,
      email: 'b@a.come',
      password: '1234'
    },
    {
      id: 3,
      address: 'valiasr 3',
      age: 40,
      email: 'c@a.come',
      password: '1234'
    },
    {
      id: 4,
      address: 'valiasr 4',
      age: 36,
      email: 'd@a.come',
      password: '1234'
    },
    {
      id: 5,
      address: 'valiasr 5',
      age: 30,
      email: 'e@a.come',
      password: '1234'
    },
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  selectedUserId(id: number): void {
    this.router.navigate(['/users', id]);
  }
}
