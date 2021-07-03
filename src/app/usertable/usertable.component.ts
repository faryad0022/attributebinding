import { Component, Input, OnInit } from '@angular/core';
import { User } from '../app-interface';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  @Input() users: User[] = [];
  isEdit = false;
  indexForEdit!: number;

  constructor() { }

  ngOnInit(): void {
  }
  edit(user: User, index: number): void{
    this.indexForEdit = index;
    if (!this.isEdit) {
      this.isEdit = !this.isEdit;
    }
  }


}
