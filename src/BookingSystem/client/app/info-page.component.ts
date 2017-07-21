import { Component, OnInit } from '@angular/core';

import { BookingSystemService } from './booking-system.service';

@Component({
  selector: 'bs-info-page',

  templateUrl: './info-page.component.html',

  styleUrls: [
    './info-page.component.css',
  ],

  providers: [
    BookingSystemService,
  ],
})
export class InfoPageComponent implements OnInit {
  constructor(
    private _bookingSystemService: BookingSystemService,
  ) { }

  ngOnInit() { }
}
