import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/timer';

import { MeetingRoom } from '../types/meeting-room';
import { GetRoomsResponse } from '../types/get-rooms-response';
import { ResponseStatus } from '../types/response-status';
import {Credentials} from '../types/credentials';
import {GetCredentialsResponse} from '../types/get-credentials-response';
import {forEach} from "@angular/router/src/utils/collection";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {LocalStorageService} from "angular-2-local-storage";
import {InMemoryMeetingRoomsService} from "../mock/in-memory-meeting-rooms.service";
import {Headers} from '@angular/http';


@Injectable()
export class BookingSystemService {
  private readonly _apiUrl = 'api';

  readonly initialUpdateDelay = 1000 * 2; // 2s // TODO: [1;0] Move to config
  readonly updatePeriod = 1000 * 10; // 10s // TODO: [1;0] Move to config
    private readonly _localStorageKey = 'currentUser';
    private getCredentialsResponse: any;
    private isLoggedIn = false;
  private _cache: {
    meetingRooms: MeetingRoom[],
    responseStatus: ResponseStatus,
    credentials: Credentials[]
  };

  private _meetingRoomsSubj: Subject<MeetingRoom[]>;
  private _responseStatusSubj: Subject<ResponseStatus>;
  private _credentialsSubj: Subject<Credentials[]>;
  private _updateTimerObs: Observable<number>;
  private _currentCredentials: Credentials;


  constructor(
    private _http: Http,
    public _localStorageService: LocalStorageService,
  ) {
    this._cache = {
      meetingRooms: undefined,
      responseStatus: undefined,
      credentials: undefined
    };

    this._meetingRoomsSubj = new Subject<MeetingRoom[]>();
    this._responseStatusSubj = new Subject<ResponseStatus>();
    this._credentialsSubj = new Subject<Credentials[]>();
    this._updateTimerObs = Observable.timer(this.initialUpdateDelay, this.updatePeriod);
    this._updateTimerObs.subscribe(
      () => {
        this._fetchData();
      },
    );
  }

  private _fetchData(): void {
    console.log('BookingSystemService#_fetchData');
      this._currentCredentials = (this._localStorageService.get<Credentials>(this._localStorageKey) || undefined);
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
    this._http
        .get(`${this._apiUrl}/credentials`)
        .subscribe(
            next => {
              console.log('next', next);
              console.log('next.json', next.json());
              this._setResponseStatus(new ResponseStatus(next.status, next.statusText));
              this.getCredentialsResponse = next.json() as GetCredentialsResponse;
              this._setCredentials(this.getCredentialsResponse.data);
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
    validateData(exchangeserver: string, username: string, password: string): boolean {
        for (let i of this.getCredentialsResponse.data) {
            if ((i.exchangeserver === exchangeserver) && (i.username === username) && (i.password === password)) {
                this._currentCredentials=i;
                return true;
            }
        }
        return false;
    }

    currentCrenentialsFilled(): boolean {
      if(this._currentCredentials === undefined){
          return false;
      }
      else{
          return true;
      }
  }
  private _setRooms(meetingRooms: MeetingRoom[]): void {
    console.log('BookingSystemService#setRooms', meetingRooms);

    this._cache.meetingRooms = meetingRooms;
    console.log(this._cache.meetingRooms);
    this._meetingRoomsSubj.next(this._cache.meetingRooms);
  }
  private _setCredentials(credentials: Credentials[]): void {
    console.log('BookingSystemService#setCredentials', credentials);

    this._cache.credentials = credentials;
    this._credentialsSubj.next(this._cache.credentials);
  }

  getRooms(): Observable<MeetingRoom[]> {
    return this._meetingRoomsSubj.asObservable();
  }
  getCredentials(): Observable<Credentials[]> {
    return this._credentialsSubj.asObservable();
  }
    login(exchangeserver: string, username: string, password: string) {
        if (this.validateData(exchangeserver, username, password)) {
            this._localStorageService.set(this._localStorageKey, this._currentCredentials);
            return true;
        }
        return false;
            }

    logout(): void {
        this.isLoggedIn = false;
    }
  private _setResponseStatus(responseStatus: ResponseStatus): void {
    console.log('BookingSystemService#setStatus', responseStatus);

    this._cache.responseStatus = responseStatus;
    this._responseStatusSubj.next(this._cache.responseStatus);
  }

  getResponseStatus(): Observable<ResponseStatus> {
    return this._responseStatusSubj.asObservable();
  }
    createMeetingRoom(room: any): void{
        console.log(this._cache.meetingRooms);
        this._cache.meetingRooms.push(room);
        console.log(this._cache.meetingRooms);
        let headers = new Headers({ 'Authorization': 'Bearer ' });
        this._http
            .put(`${this._apiUrl}/rooms/`, this._cache.meetingRooms, { headers: headers }).subscribe(
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
}
