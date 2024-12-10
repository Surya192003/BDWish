import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations : [routeAnimations],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BDWish';
  prepareRoute(outlet : RouterOutlet){
    return outlet?.activatedRouteData?.['animation'];
  }
}
