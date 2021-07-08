import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {
  availableColor = [
    '#852C64', '#13000C', '#240117', '#E091C3', '#EFB3D9', '#AA8139', '#180F00',
    '#2E1E01', '#FFDEA5', '#FFE8BF', '#2C4770', '#010710', '#030E1F', '#8DA7D0',
    '#B2C6E6', '#80A035', '#101700', '#1F2C01', '#DDF7A0', '#E8FBBC'
  ];
  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;
  // tslint:disable-next-line:typedef
  @HostListener('keydown') newColor() {
    const randomColorIndex = Math.floor(Math.random() * this.availableColor.length);
    this.color = this.borderColor = this.availableColor[randomColorIndex];
  }
}
