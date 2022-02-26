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
import * as $ from 'jquery';

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
    const delta = Math.abs(value - this._page);
    this._page = value;
    if (this.viewport) {
      this.viewport.scrollToIndex(value - 1, delta == 1 ? 'smooth' : undefined);

      // Pause all videos & audio clips
      $(this.viewport.getElementRef().nativeElement)
        .find('audio, video')
        .each(function (_index, element: any) {
          element.pause();
        });
    }
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
