import { Component, Input, OnInit } from '@angular/core';

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

  isOccupiedNow = MeetingRoom.isOccupiedNow;
  hasNextMeeting = MeetingRoom.hasNextMeeting;
  currentMeeting = MeetingRoom.currentMeeting;

  ngOnInit() { }

  roomStatusText(): string {
    if (this.isOccupiedNow(this.room)) {
      return 'Occupied';
    } else {
      return 'Available';
    }
  }
}
