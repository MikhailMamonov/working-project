import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MeetingRoom } from '../../types/meeting-room';

import { BookingSystemService } from '../../services/booking-system.service';
import {Credentials} from '../../types/credentials';

@Component({
  selector: 'bs-info-page',

  templateUrl: './info-page.component.html',

  styleUrls: [
    './info-page.component.css',
  ],
})
export class InfoPageComponent implements OnInit {
  meetingRoomsObs: Observable<MeetingRoom[]>;
  credentialsObs: Observable<Credentials[]>;

  constructor(
    private _bookingSystemService: BookingSystemService,
  ) { }

  ngOnInit() {
    this.meetingRoomsObs = this._bookingSystemService.getRooms()
      .map(meetingRooms => {
        console.log('InfoPageComponent#ngOnInit', meetingRooms);

        return meetingRooms;
      });
    this.credentialsObs = this._bookingSystemService.getCredentials()
        .map(credentials => {
          console.log('InfoPageComponent#ngOnInit', credentials);

          return credentials;
        });
  }
}
