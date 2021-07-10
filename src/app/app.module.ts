import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselDirective } from './shared/directives/carousel.directive';
import { ColorfulDirective } from './shared/directives/colorful.directive';
import { HighLightDirective } from './shared/directives/highLight.directive';
import { OpacityChangeDirective } from './shared/directives/opacityChange.directive';
import { UsersComponent } from './views/users/users.component';
import { AdminComponent } from './views/admin/admin.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { UserComponent } from './views/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorfulDirective,
    HighLightDirective,
    CarouselDirective,
    OpacityChangeDirective,
    UsersComponent,
    AdminComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    UserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
