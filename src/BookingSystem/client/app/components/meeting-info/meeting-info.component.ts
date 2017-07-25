import { Component, Input, OnInit } from '@angular/core';

import { Meeting } from '../../types/meeting';

@Component({
  selector: 'bs-meeting-info',

  templateUrl: './meeting-info.component.html',

  styleUrls: [
    './meeting-info.component.css',
  ],
})
export class MeetingInfoComponent implements OnInit {
  @Input() meeting: Meeting;

  ngOnInit() { }
}
