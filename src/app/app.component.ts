import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  constructor() {
    // type HttpResponse = { code: number; data: string };

    // const observable = new Observable<HttpResponse>((subscriber) => {
    //   console.log('Inside subscriber..');
    //   subscriber.next({ code: 200, data: 'this is data 1 ...' });
    //   subscriber.next({ code: 200, data: 'this is data 2 ...' });
    //   subscriber.next({ code: 200, data: 'this is data 3 ...' });
    //   subscriber.next({ code: 500, data: 'An error ocured' });
    //   setTimeout(() => {
    //     subscriber.next({ code: 200, data: 'this is data  more data...' });
    //     subscriber.complete();
    //   }, 3 * 1000);
    //   console.log('subscriber is done editting....');
    // });

    // observable.subscribe({
    //   next(response: HttpResponse) {
    //     console.log('gotResponse', response);
    //   },
    //   error(error: any) {
    //     console.log('Error');
    //   },
    //   complete() {
    //     console.log('Done');
    //   },
    // });
  }
}
