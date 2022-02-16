import { Component, OnDestroy, OnInit } from '@angular/core';
import { Page } from './types';
import pages from './pages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'etlearns-book';
  isFullscreen = false;
  isSideNavOpen = false;
  currentPage = 1;
  pages: Page[];

  constructor() {
    this.pages = pages;
  }

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

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  fullscreenChangeHandler = (() => {
    this.isFullscreen = !!document.fullscreenElement;
  }).bind(this);
}
