import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-chrome-plugin-poc';
  counter: number = 0;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.log('app-root - ngOnInit');
    // @ts-ignore
    chrome.runtime.onMessage.addListener(
      // tslint:disable-next-line:only-arrow-functions
      (request, sender, sendResponse) => {
        console.log('app-root', request);
        this.counter = this.counter + 1;
        this.changeDetectorRef.detectChanges();
      }
    );

  }
}
