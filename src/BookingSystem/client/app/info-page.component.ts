import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MeetingRoom } from './meeting-room';

import { BookingSystemService } from './booking-system.service';

@Component({
  selector: 'bs-info-page',

  templateUrl: './info-page.component.html',

  styleUrls: [
    './info-page.component.css',
  ],

  providers: [
    BookingSystemService,
  ],
})
export class InfoPageComponent implements OnInit {
  meetingRooms: Observable<MeetingRoom[]>;

  constructor(
    private _bookingSystemService: BookingSystemService,
  ) { }

  ngOnInit() {
    this.meetingRooms = this._bookingSystemService.getRooms()
      .map(meetingRooms => {
        console.log('InfoPageComponent#ngOnInit', meetingRooms);

        return meetingRooms;
      });
  }
}
