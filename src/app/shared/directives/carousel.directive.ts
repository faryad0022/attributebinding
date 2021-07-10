import {
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';
import {ICarouselContext} from 'src/app/interfaces/app-interface';

@Directive({selector: '[appCarousel]'})
export class CarouselDirective implements OnInit {
    context !: ICarouselContext;
    index = 0;
    // tslint:disable-next-line:no-input-rename
    @Input('appCarouselFrom')images!: string[];

    constructor(private templateRef: TemplateRef < ICarouselContext >, private viewContainerRef: ViewContainerRef) {}


    ngOnInit(): void {
        this.context = {
            $implicit: this.images[0],
            controller: {
                next: () => this.next(),
                prev: () => this.previous()
            }
        };

        this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    }
    next(): void {
        this.index ++;
        if (this.index >= this.images.length) {
            this.index = 0;
        }
        this.context.$implicit = this.images[this.index];
    }
    previous(): void {
        this.index --;
        if (this.index < 0) {
            this.index = this.images.length - 1;
        }
        this.context.$implicit = this.images[this.index];
    }
}
