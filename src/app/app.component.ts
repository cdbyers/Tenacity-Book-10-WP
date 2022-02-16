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
  pages: Page[];
  private _currentPage = 1;

  public get currentPage() {
    return this._currentPage;
  }
  public set currentPage(value) {
    window.history.pushState(null, '', `/?page=${value}`);
    this._currentPage = value;
  }

  constructor() {
    this.pages = pages;
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    if (page && !Number.isNaN(page)) this._currentPage = Number.parseInt(page);
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
