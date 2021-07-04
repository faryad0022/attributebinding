import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { User } from './app-interface';
import { IncComponent } from './inc/inc.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('par') par!: ElementRef ;
  @ViewChild('far', {static: true, read: ElementRef}) far!: ElementRef ;

  @ViewChild(IncComponent, {static: true, read: IncComponent}) incComp!: IncComponent;
  @ViewChildren(IncComponent, {read: IncComponent}) inComps!: QueryList<IncComponent>;
  constructor(private renderer: Renderer2){}
  ngOnInit(): void {
    this.incComp.increment();
    // this.far.nativeElement.innerHTML = 'From AppComponent is changed in ngOnInit';
    this.renderer.setStyle(this.far.nativeElement, 'color', 'red');
  }

  ngAfterViewInit(): void{
    this.renderer.setStyle(this.par.nativeElement, 'color', 'purple');
    // this.par.nativeElement.innerHTML = 'From AppComponent is changed in afterviewinit';
    this.inComps.forEach((comp) => {
      comp.increment();
    });
  }

  onClick(value: HTMLInputElement): void{
    alert(value.value);
  }

}
