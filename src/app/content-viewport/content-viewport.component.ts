import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-content-viewport',
  templateUrl: './content-viewport.component.html',
  styleUrls: ['./content-viewport.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentViewportComponent implements OnInit, AfterViewInit {
  pageWidth = 1000;
  @ViewChild('viewport') viewport?: CdkVirtualScrollViewport;
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
    this.pageWidth = this.viewport!.elementRef.nativeElement.clientWidth;
  }
}
