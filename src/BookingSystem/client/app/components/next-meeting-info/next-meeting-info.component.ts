import { Component, Input, OnInit } from '@angular/core';

import { MeetingRoom } from '../../types/meeting-room';
import { Meeting } from '../../types/meeting';

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
