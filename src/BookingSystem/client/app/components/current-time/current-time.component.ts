import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';

@Component({
  selector: 'bs-current-time',

  templateUrl: './current-time.component.html',

  styleUrls: [
    './current-time.component.css',
  ],
})
export class CurrentTimeComponent implements OnInit {
  private readonly _tickPeriod = 1000 * 1; // 1s // TODO: [1;0] Move to config

  nowObs = Observable
    .timer(0, this._tickPeriod)
    .map(
      () => {
        return new Date();
      },
    );

  ngOnInit() { }
}
