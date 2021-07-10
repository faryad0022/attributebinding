import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/interfaces/app-interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
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
  submanager = new Subscription();
  isUserFound = true;
  selectedId!: number;
  selectedUser: IUser | undefined;
  constructor(private route: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.submanager.unsubscribe();
  }
  ngOnInit(): void {
    this.selectedId = +this.route.snapshot.params.id;
    this.selectedUser = this.users.find(user => user.id === this.selectedId );
    if (!this.selectedUser) {
      this.isUserFound = false;
    }
    this.submanager.add(  this.route.params.subscribe((params: Params) => {
      this.selectedUser = this.users.find(user => user.id === +params.id);
    }));
  }

}
