import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MdProgressSpinnerModule } from '@angular/material';

import { MeetingRoom } from '../../types/meeting-room';

import { BookingSystemService } from '../../services/booking-system.service';

@Component({
  selector: 'bs-info-page',

  templateUrl: './info-page.component.html',

  styleUrls: [
    './info-page.component.css',
  ],
})
export class InfoPageComponent implements OnInit {
  meetingRoomsObs: Observable<MeetingRoom[]>;

  constructor(
    private _bookingSystemService: BookingSystemService,
  ) { }

  ngOnInit() {
    this.meetingRoomsObs = this._bookingSystemService.getRooms()
      .map(meetingRooms => {
        console.log('InfoPageComponent#ngOnInit', meetingRooms);

        return meetingRooms;
      });
  }
}
