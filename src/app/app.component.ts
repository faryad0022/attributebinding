import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { User } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user: User = {
    email: 'a@a.com',
    address: 'valiasr',
    password: '123',
    age: 40
  };
  users: User[] = [
    this.user,
    {
      email: 'b@b.com',
      address: 'valiasr21',
      password: '123',
      age: 30
    },
    {
      email: 'c@c.com',
      address: 'valiasr234',
      password: '123',
      age: 31
    },
    {
      email: 'd@d.com',
      address: 'valiasr12321',
      password: '123',
      age: 25
    },
  ];
  constructor(private renderer: Renderer2){}
  ngOnInit(): void {
  }
  onChange(user: any): void{
    console.log(user);
  }
}
