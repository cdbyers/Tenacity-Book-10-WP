import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Page } from '../types';

@Component({
  selector: 'app-content-viewport',
  templateUrl: './content-viewport.component.html',
  styleUrls: ['./content-viewport.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentViewportComponent implements OnInit, AfterViewInit {
  pageWidth = 1000;
  @ViewChild('viewport') viewport!: CdkVirtualScrollViewport;
  @Input() pages!: Page[];
  private _page: number = 1;

  get page(): number {
    return this._page;
  }

  @Input() set page(value: number) {
    this._page = value;
    if (this.viewport) this.viewport.scrollToIndex(value - 1, 'smooth');
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.pageWidth = this.viewport.elementRef.nativeElement.clientWidth;
    }, 0);
    window.setTimeout(() => {
      this.viewport.scrollToIndex(this._page - 1);
    }, 100);
  }
}
