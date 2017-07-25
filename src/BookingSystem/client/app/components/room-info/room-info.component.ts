import { Component, Input, OnInit } from '@angular/core';

import { MeetingRoom } from '../../types/meeting-room';

@Component({
  selector: 'bs-room-info',

  templateUrl: './room-info.component.html',

  styleUrls: [
    './room-info.component.css',
  ],
})
export class RoomInfoComponent implements OnInit {
  @Input() room: MeetingRoom;

  hasNextMeeting = MeetingRoom.hasNextMeeting;
  nextMeeting = MeetingRoom.nextMeeting;

  ngOnInit() { }
}
