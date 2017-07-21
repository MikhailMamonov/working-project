import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/timer';

import { MeetingRoom } from './meeting-room';

@Injectable()
export class BookingSystemService {
  private readonly _apiUrl = 'api';
  private _data: { meetingRooms: MeetingRoom[] };

  private _meetingRoomsSubj: Subject<MeetingRoom[]>;

  private readonly _initialUpdateDelay = 1000 * 3; // 1s
  private readonly _updatePeriod = 1000 * 20; // 20s
  private _updateTimerObs: Observable<number>;

  constructor(
    private _http: Http,
  ) {
    this._data = { meetingRooms: [ ] };
    this._meetingRoomsSubj = new Subject<MeetingRoom[]>();

    this._updateTimerObs = Observable.timer(this._initialUpdateDelay, this._updatePeriod);
    this._updateTimerObs.subscribe(() => this._fetchData());
  }

  _fetchData(): void {
    console.log('BookingSystemService#_fetchData');

    // this._http
    //   .get(`${this._apiUrl}/room`)
    //   .subscribe(response => console.log(response));

    this._http
      .get(`${this._apiUrl}/room`)
      .map(resp => {
        console.log(resp.json());

        return resp.json().data as MeetingRoom[];
      })
      .subscribe(meetingRooms => this._setRooms(meetingRooms));
  }

  private _setRooms(meetingRooms: MeetingRoom[]): void {
    console.log('BookingSystemService#setRooms', meetingRooms);

    this._data.meetingRooms = meetingRooms;
    this._meetingRoomsSubj.next(this._data.meetingRooms);
  }

  getRooms(): Observable<MeetingRoom[]> {
    return this._meetingRoomsSubj.asObservable();
  }
}
