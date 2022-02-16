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
export class PageComponent implements AfterViewInit {
  @Input() pageId: number = 1;
  loadState: 'loading' | 'success' | 'error' = 'loading';
  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit() {
    this.loadContent();
  }

  loadContent() {
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
