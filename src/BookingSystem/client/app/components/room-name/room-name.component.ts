import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bs-room-name',

  templateUrl: './room-name.component.html',

  styleUrls: [
    './room-name.component.css',
  ],
})
export class RoomNameComponent implements OnInit {
  @Input() roomName: string;

  ngOnInit() { }
}
