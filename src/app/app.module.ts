import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './WISH_COMPONENTS/home-page/home-page.component';
import { HapppyBirthdayComponent } from './WISH_COMPONENTS/happpy-birthday/happpy-birthday.component';
import { SlideShowComponent } from './WISH_COMPONENTS/slide-show/slide-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotosComponent } from './WISH_COMPONENTS/photos/photos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HapppyBirthdayComponent,
    SlideShowComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
