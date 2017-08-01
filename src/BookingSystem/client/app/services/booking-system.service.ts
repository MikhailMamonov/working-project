import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/timer';

import { MeetingRoom } from '../types/meeting-room';
import { GetRoomsResponse } from '../types/get-rooms-response';
import { ResponseStatus } from '../types/response-status';


@Injectable()
export class BookingSystemService {
  private readonly _apiUrl = 'api';

  readonly initialUpdateDelay = 1000 * 2; // 2s // TODO: [1;0] Move to config
  readonly updatePeriod = 1000 * 10; // 10s // TODO: [1;0] Move to config

  private _cache: {
    meetingRooms: MeetingRoom[],
    responseStatus: ResponseStatus,
  };

  private _meetingRoomsSubj: Subject<MeetingRoom[]>;
  private _responseStatusSubj: Subject<ResponseStatus>;

  private _updateTimerObs: Observable<number>;

  constructor(
    private _http: Http,
  ) {
    this._cache = {
      meetingRooms: undefined,
      responseStatus: undefined,
    };

    this._meetingRoomsSubj = new Subject<MeetingRoom[]>();
    this._responseStatusSubj = new Subject<ResponseStatus>();
    this._updateTimerObs = Observable.timer(this.initialUpdateDelay, this.updatePeriod);
    this._updateTimerObs.subscribe(
      () => {
        this._fetchData();
      },
    );
  }

  private _fetchData(): void {
    console.log('BookingSystemService#_fetchData');

    this._http
      .get(`${this._apiUrl}/rooms`)
      .subscribe(
        next => {
          console.log('next', next);
          console.log('next.json', next.json());

          this._setResponseStatus(new ResponseStatus(next.status, next.statusText));

          const getRoomsResponse = next.json() as GetRoomsResponse;
          this._setRooms(getRoomsResponse.data);
        },

        (error: Response) => {
          console.log('error', error);

          this._setResponseStatus(new ResponseStatus(error.status, error.statusText));
        },

        () => {
          console.log('complete');
        }
      );
  }


  private _setRooms(meetingRooms: MeetingRoom[]): void {
    console.log('BookingSystemService#setRooms', meetingRooms);

    this._cache.meetingRooms = meetingRooms;
    this._meetingRoomsSubj.next(this._cache.meetingRooms);
  }

  getRooms(): Observable<MeetingRoom[]> {
    return this._meetingRoomsSubj.asObservable();
  }



  private _setResponseStatus(responseStatus: ResponseStatus): void {
    console.log('BookingSystemService#setStatus', responseStatus);

    this._cache.responseStatus = responseStatus;
    this._responseStatusSubj.next(this._cache.responseStatus);
  }

  getResponseStatus(): Observable<ResponseStatus> {
    return this._responseStatusSubj.asObservable();
  }
}
