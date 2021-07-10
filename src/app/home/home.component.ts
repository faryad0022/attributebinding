import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  color = 'red';

  opacity = '0.2';
  images: string[] = ['/assets/1.png', '/assets/2.png', '/assets/3.png', '/assets/4.png'];
  constructor(private renderer: Renderer2){}
  ngOnInit(): void {
  }

}
