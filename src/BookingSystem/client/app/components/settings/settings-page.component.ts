import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MeetingRoom } from '../../types/meeting-room';

import { BookingSystemService } from '../../services/booking-system.service';


@Component({
    selector: 'bs-settings-page',

    templateUrl: './settings-page.component.html',

    styleUrls: [
        './settings-page.component.css',
    ],
})
export class SettingsPageComponent implements OnInit {

    constructor(
        private _bookingSystemService: BookingSystemService,
    ) { }
    ngOnInit() {
    }

    values = '';

    onKey(event: any) { // without type info
        this.values += event.target.value + ' | ';
    }

}
