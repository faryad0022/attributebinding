import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { User } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('far') far!: ElementRef;
 constructor(private renderer: Renderer2){}
  ngOnInit(): void {
 }

 Change(): void{
    this.renderer.setStyle(this.far.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setProperty(this.far.nativeElement, 'textContent', '12334');
  }
}
