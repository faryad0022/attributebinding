import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { User } from './interfaces/app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  color = 'red';
  opacity = '0.2';
  images: string[] = ['/assets/1.png', '/assets/2.png', '/assets/3.png', '/assets/4.png'];
  constructor(private renderer: Renderer2){}
  ngOnInit(): void {
  }
}
