import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './WISH_COMPONENTS/home-page/home-page.component';
import { SlideShowComponent } from './WISH_COMPONENTS/slide-show/slide-show.component';
import { animation } from '@angular/animations';
import { PhotosComponent } from './WISH_COMPONENTS/photos/photos.component';

const routes: Routes = [

  {path : '',redirectTo:'Home', pathMatch:'full'},
  {path : 'Home', component : HomePageComponent , data : { animation : 'SlideShowPage' } }, 
  {path: 'LoveYouToo', component : SlideShowComponent, data : { animation : 'SlideShowPage' } },
  {path: 'MissYouToo', component : PhotosComponent ,data : {animation : 'SlideShowPage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
