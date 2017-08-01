import { Component, Input, OnInit } from '@angular/core';

import { MeetingRoom } from '../../types/meeting-room';

@Component({
  selector: 'bs-settings-info',

  templateUrl: './settings-info.component.html',

  styleUrls: [
    './settings-info.component.css',
  ],
})
export class SettingsInfoComponent implements OnInit {
  @Input() room: MeetingRoom;

  isOccupiedNow = MeetingRoom.isOccupiedNow;
  hasNextMeeting = MeetingRoom.hasNextMeeting;
  nextMeeting = MeetingRoom.nextMeeting;

  ngOnInit() { }
}
