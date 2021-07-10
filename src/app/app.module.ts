import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselDirective } from './shared/directives/carousel.directive';
import { ColorfulDirective } from './shared/directives/colorful.directive';
import { HighLightDirective } from './shared/directives/highLight.directive';
import { OpacityChangeDirective } from './shared/directives/opacityChange.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorfulDirective,
    HighLightDirective,
    CarouselDirective,
    OpacityChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
