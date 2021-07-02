import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isCorrect = false;
  isModified = false;
  isCancelled = false;
  styles = {};
  classes = {};

  users: string[] = ['faryad', 'farzad', 'payam'];

  usersObject = [
    {
      id: 1,
      name: 'faryad'
    },
    {
      id: 2,
      name: 'faryad2222'
    },
    {
      id: 3,
      name: 'faryad33333'
    },
  ];
  ngOnInit(): void {
    this.styles = {
      'font-size': this.isCorrect ? '2rem' : '8rem',
      color: 'red'
    };
    this.classes = {
      'big-font-size': this.isModified,
      'cancelled-color': this.isCancelled
    };
  }
  addUser(): any{
    this.isCorrect = !this.isCorrect;
    this.usersObject.push({
      id: 4,
      name: 'faryad4444'
    });
    return this.usersObject;
  }
  trackByFunc(index: number, element: any): any{
    return element.id;
  }
}
