import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  ngOnInit(): void {
    this.playMusic();
  }
  playMusic(): void {
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      audio.play();
    }
  }
}
