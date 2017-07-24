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
}
