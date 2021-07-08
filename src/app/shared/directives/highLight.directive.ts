import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input() highLightColor = 'yellow';
  // tslint:disable-next-line:typedef
  @HostListener('mouseenter') onMouseEnter(){
    this.changeBgColor(this.highLightColor);
  }
  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') onMouseLeave(){
    this.changeBgColor('transparent');
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // tslint:disable-next-line:typedef
  changeBgColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);

  }

}
