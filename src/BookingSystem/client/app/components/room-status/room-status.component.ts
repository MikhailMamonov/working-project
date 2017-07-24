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

  ngOnInit() { }

  // TODO: [1;0] Move this to `MeetingRoom' class.
  status(): string {
    if (this.room.isOccupiedNow()) {
      return 'Occupied';
    } else {
      return 'Available';
    }
  }
}
