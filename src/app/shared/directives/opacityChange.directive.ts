import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOpacityChange]'
})
export class OpacityChangeDirective {
  @Input('appOpacityChange') opacity = '0.1';
  // tslint:disable-next-line:typedef
  @HostListener('mouseenter') onMouseEnter() {
    this.changeOpacity('1');
  }
  // tslint:disable-next-line:typedef
  @HostListener('onclick') onClick() {
    this.rendere.setStyle(this.elementRef.nativeElement, 'border-color', 'transparent');
  }
    // tslint:disable-next-line:typedef
  @HostListener('mouseleave') onMouseLeave() {
      this.changeOpacity('0.2');
  }
  constructor(private elementRef: ElementRef, private rendere: Renderer2) {
    this.rendere.setStyle(this.elementRef.nativeElement, 'opacity', '0.2');
    this.rendere.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.rendere.setStyle(this.elementRef.nativeElement, 'border-color', 'transparent');
    this.rendere.setStyle(this.elementRef.nativeElement, 'color', 'black');
   }

  changeOpacity(val: string): void{
    this.rendere.setStyle(this.elementRef.nativeElement, 'opacity', val);
    this.rendere.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.rendere.setStyle(this.elementRef.nativeElement, 'border-color', 'transparent');
    this.rendere.setStyle(this.elementRef.nativeElement, 'color', 'black');


  }
}
