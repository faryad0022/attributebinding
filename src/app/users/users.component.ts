import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterContentChecked, AfterContentInit {
  @ContentChild('far', {static: true}) far!: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit:' + this.far.nativeElement.textContent);
  }

  ngAfterContentInit(): void{
    console.log('ngAfterContentInit:' + this.far.nativeElement.textContent);

  }
  ngAfterContentChecked(): void{
    console.log('ngAfterContentChecked:' + this.far.nativeElement.textContent);
  }
}
