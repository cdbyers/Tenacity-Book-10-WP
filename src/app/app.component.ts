import { Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
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
  @ViewChild('sidenavScrollViewport')
  sidenavScrollViewport!: CdkVirtualScrollViewport;
  private _currentPage = 1;

  public get currentPage() {
    return this._currentPage;
  }
  public set currentPage(value) {
    if (value > 0 && value <= pages.length) {
      window.history.pushState(null, '', `/?page=${value}`);
      this._currentPage = value;
      this.isSideNavOpen = false;
    }
  }

  constructor(private ngZone: NgZone) {
    this.pages = pages;
    this.onUrlChanged();

    // For page links
    (window as any).goToPage = (page: number) => {
      this.ngZone.run(() => (this.currentPage = page));
    };
  }

  ngOnInit() {
    this.isFullscreen = !!document.fullscreenElement;
    document.addEventListener('fullscreenchange', this.fullscreenChangeHandler);
    window.addEventListener('popstate', () => this.onUrlChanged());
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
    if (this.isSideNavOpen)
      this.sidenavScrollViewport.scrollToIndex(
        Math.max(0, this.currentPage - 5)
      );
  }

  fullscreenChangeHandler = (() => {
    this.isFullscreen = !!document.fullscreenElement;
  }).bind(this);

  private onUrlChanged() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    if (page && !Number.isNaN(page)) this._currentPage = Number.parseInt(page);
  }
}
