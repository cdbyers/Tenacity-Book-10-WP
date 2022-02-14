import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'etlearns-book';
  isFullscreen = false;

  ngOnInit() {
    this.isFullscreen = !!document.fullscreenElement;
    document.addEventListener('fullscreenchange', this.fullscreenChangeHandler);
  }

  ngOnDestroy() {
    document.removeEventListener(
      'fullscreenchange',
      this.fullscreenChangeHandler
    );
  }

  toggleFullscreen() {
    if (this.isFullscreen) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
  }
 
  fullscreenChangeHandler = (() => {
    this.isFullscreen = !!document.fullscreenElement;
  }).bind(this);
}
