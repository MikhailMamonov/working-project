import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';

import { Meeting } from '../../types/meeting';
import { MeetingRoom } from '../../types/meeting-room';

@Component({
  selector: 'bs-room-status',

  templateUrl: './room-status.component.html',

  styleUrls: [
    './room-status.component.css',
  ],
})
export class RoomStatusComponent implements OnInit {
  @Input() room: MeetingRoom;

  private readonly _tickPeriod = 1000 * 60; // 1m
  remainingTimeStringObs: Observable<string>;

  nextMeetingStartTime?: Date;

  isOccupiedNow = MeetingRoom.isOccupiedNow;
  hasNextMeeting = MeetingRoom.hasNextMeeting;
  currentMeeting = MeetingRoom.currentMeeting;

  ngOnInit() {
    this.remainingTimeStringObs = Observable
      .timer(0, this._tickPeriod)
      .map(() => {
        return moment().to(Meeting.endTime(MeetingRoom.currentMeeting(this.room)), true);
      });

    if (MeetingRoom.hasNextMeeting(this.room)) {
      this.nextMeetingStartTime = Meeting.startTime(MeetingRoom.nextMeeting(this.room)).toDate();
    }
  }
}
