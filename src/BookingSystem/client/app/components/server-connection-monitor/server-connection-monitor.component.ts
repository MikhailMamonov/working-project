import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import * as moment from 'moment';

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
  countdownTimerObs: Observable<string>;

  constructor(
    private _bookingSystemService: BookingSystemService,
  ) { }

  ngOnInit() {
    const nowDate = new Date();
    const initialResponse = new ResponseStatus(202, 'OK');
    initialResponse.date = nowDate;

    this.responseStatusObs = this._bookingSystemService.getResponseStatus()
      .startWith(initialResponse);

    this.nowObs = Observable
      .timer(this._tickPeriod, this._tickPeriod)
      .map(
        () => {
          return new Date();
        },
      )
      .startWith(nowDate);

    this.countdownTimerObs = Observable
      .combineLatest(
        this.responseStatusObs,
        this.nowObs,
        (responseStatus, now) => {
          return moment(now).to(moment(responseStatus.date).add(this._bookingSystemService.updatePeriod), true);
        }
      );
  }
}
