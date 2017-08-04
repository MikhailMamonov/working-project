import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MeetingRoom } from '../../types/meeting-room';

import { BookingSystemService } from '../../services/booking-system.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';




@Component({
    selector: 'bs-settings-page',

    templateUrl: './settings-page.component.html',

    styleUrls: [
        './settings-page.component.css',
    ],
})
export class SettingsPageComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private _bookingSystemService: BookingSystemService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
    ) { }
    ngOnInit() {
        this._bookingSystemService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    login(event: any) { // without type info
        this.loading = true;
        let redirect = '/info';
        if (this._bookingSystemService.login(this.model.exchangeserver, this.model.username, this.model.password)) {
                    this.router.navigate([redirect]);
                }
                    this.alertService.error('Exchange server, Username or password is incorrect');
                    this.loading = false;
                }
    }

