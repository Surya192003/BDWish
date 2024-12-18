import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-happpy-birthday',
  templateUrl: './happpy-birthday.component.html',
  styleUrls: ['./happpy-birthday.component.css']
})
export class HapppyBirthdayComponent implements OnInit {
  constructor( public router : Router ) { }
  text_shown : string = "You Dont Love Me 🥲"
  proceed_text : string = "You Should Love Me To Proceed 😁"
  ngOnInit(): void {
  }
  isToggled: boolean = false;
  toggle(): void {
    this.isToggled = !this.isToggled;
    if(this.isToggled){
      this.text_shown = "You Love Me 🥳"
      this.proceed_text = "You Can Proceed 😘"
    }else{
      this.text_shown = "You Dont Love Me 🥲"
      this.proceed_text = "You Should Love Me To Proceed 😁"
    }
  }
  procced_to(){
    if(this.isToggled){
      this.router.navigate(["/LoveYouToo"])
    }else{
      
    }
  }
}
