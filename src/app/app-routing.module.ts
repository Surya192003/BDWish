import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './WISH_COMPONENTS/home-page/home-page.component';
import { SlideShowComponent } from './WISH_COMPONENTS/slide-show/slide-show.component';
import { animation } from '@angular/animations';

const routes: Routes = [

  {path : '',redirectTo:'Home', pathMatch:'full'},
  {path : 'Home', component : HomePageComponent , data : { animation : 'HomePage' } }, 
  {path: 'LoveYouToo', component : SlideShowComponent, data : { animation : 'SlideShowPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
