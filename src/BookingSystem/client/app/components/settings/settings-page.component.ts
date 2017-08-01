import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MeetingRoom } from '../../types/meeting-room';

import { BookingSystemService } from '../../services/booking-system.service';
import {SettingsForm} from "../../types/settings";

@Component({
    selector: 'bs-settings-page',

    templateUrl: './settings-page.component.html',

    styleUrls: [
        './settings-page.component.css',
    ],
})
export class SettingsPageComponent implements OnInit {
    settingsFormObs: Observable<SettingsForm>;

    constructor(
        private _bookingSystemService: BookingSystemService,
    ) { }
    ngOnInit() {
        this.settingsFormObs = this._bookingSystemService.getSettingsForm()
            .map(settingsForm => {
                console.log('InfoPageComponent#ngOnInit', settingsForm);

                return settingsForm;
            });
    }

}
