import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent {
  private _pageId: number = 1;
  loadState: 'loading' | 'success' | 'error' = 'loading';
  @ViewChild('container') container!: ElementRef;

  get pageId(): number {
    return this._pageId;
  }
  @Input() set pageId(value: number) {
    this._pageId = value;
    this.loadContent();
  }

  loadContent() {
    this.loadState = 'loading';
    fetch(`/assets/pages/${this.pageId}.html`)
      .then((response) => response.text())
      .then((html) => {
        this.container.nativeElement.innerHTML = html;
        this.loadState = 'success';

        const mediaElements = $(this.container.nativeElement).find(
          'audio, video'
        );
        mediaElements.on({
          play: function (e: Event) {
            mediaElements.each(function (_index, element: any) {
              if (element != e.target) element.pause();
            });
          },
        });
      })
      .catch((err) => {
        this.loadState = 'error';
        console.error(err);
      });
  }

  handleDoubleClick() {
    if (!environment.production && this.loadState == 'success')
      this.loadContent();
  }
}
