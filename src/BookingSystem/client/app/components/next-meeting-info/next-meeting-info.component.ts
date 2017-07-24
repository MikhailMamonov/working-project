import { Component, Input, OnInit } from '@angular/core';

import { MeetingRoom } from '../../shared/meeting-room';

@Component({
  selector: 'bs-next-meeting-info',

  templateUrl: './next-meeting-info.component.html',

  styleUrls: [
    './next-meeting-info.component.css',
  ],
})
export class NextMeetingInfoComponent implements OnInit {
  @Input() room: MeetingRoom;

  ngOnInit() { }
}
