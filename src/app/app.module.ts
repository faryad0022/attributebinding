import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorfulDirective } from './shared/directives/colorful.directive';
import { HighLightDirective } from './shared/directives/highLight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorfulDirective,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
