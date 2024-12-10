import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  constructor( public router : Router ) { }
  ngOnInit(): void {
   this.router.navigate(["/MissYouToo"])
  }
  heart : string = "<3"
}
