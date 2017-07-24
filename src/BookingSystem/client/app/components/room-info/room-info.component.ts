import { Component, Input, OnInit } from '@angular/core';

import { MeetingRoom } from '../../shared/meeting-room';

@Component({
  selector: 'bs-room-info',

  templateUrl: './room-info.component.html',

  styleUrls: [
    './room-info.component.css',
  ],
})
export class RoomInfoComponent implements OnInit {
  @Input() room: MeetingRoom;

  ngOnInit() { }
}
