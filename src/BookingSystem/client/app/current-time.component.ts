import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'bs-current-time',

  templateUrl: './current-time.component.html',

  styleUrls: [
    './current-time.component.css',
  ],
})
export class CurrentTimeComponent implements OnInit {
  private readonly _tickPeriod = 1000 * 1; // 1s

  now = Observable
    .interval(this._tickPeriod)
    .map(() => new Date());

  ngOnInit() { }
}
