import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { MeetingRoom } from '../../types/meeting-room';

@Directive({
  selector: '[bsRoomInfoColorize]'
})
export class RoomInfoColorizeDirective {
  @Input() room: MeetingRoom;

  private _color?: string;

  constructor(
    private _elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    if (this.room) {
      if (MeetingRoom.isOccupiedNow(this.room)) {
        this._color = 'red';
      } else {
        this._color = 'green';
      }
    }

    this._colorize(this._color);
  }

  _colorize(color: string): void {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}
