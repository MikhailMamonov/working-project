import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { ResponseStatus } from '../../types/response-status';
import { BookingSystemService } from '../../services/booking-system.service';

@Component({
  selector: 'bs-server-connection-monitor',

  templateUrl: './server-connection-monitor.component.html',

  styleUrls: [
    './server-connection-monitor.component.css',
  ],
})
export class ServerConnectionMonitorComponent implements OnInit {
  private readonly _tickPeriod = 1000 * 1; // 1s // TODO: [1;0] Move to config

  responseStatusObs: Observable<ResponseStatus>;

  nowObs: Observable<Date>;
  countdownTimerObs: Observable<Date>;

  constructor(
    private _bookingSystemService: BookingSystemService,
  ) { }

  ngOnInit() {
    this.responseStatusObs = this._bookingSystemService.getResponseStatus()
      .startWith(new ResponseStatus(202, 'OK'));

    this.nowObs = Observable
      .timer(this._bookingSystemService.initialUpdateDelay, this._tickPeriod)
      .map(
        () => {
          return new Date();
        },
      )
      .startWith(new Date());

    this.countdownTimerObs = Observable
      .combineLatest(
        this.responseStatusObs,
        this.nowObs,
        (responseStatus, now) => {
          return new Date(responseStatus.date.getTime() + this._bookingSystemService.updatePeriod - now.getTime());
        }
      );

    // this.countdownTimerObs.subscribe(next => {
    //   console.log(next);
    // });
  }
}
