import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

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
      })
      .catch((err) => {
        this.loadState = 'error';
        console.error(err);
      });
  }
}
