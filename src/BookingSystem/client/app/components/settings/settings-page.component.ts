import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MeetingRoom } from '../../types/meeting-room';

import { BookingSystemService } from '../../services/booking-system.service';
import {ActivatedRoute, Router} from "@angular/router";
import {SettingsService} from "../../services/settings.service";
import {AlertService} from "../../services/alert.service";
import {User} from "../../types/user";
import {UserService} from "../../services/user.service";



@Component({
    selector: 'bs-settings-page',

    templateUrl: './settings-page.component.html',

    styleUrls: [
        './settings-page.component.css',
    ],
})
export class SettingsPageComponent implements OnInit {

    currentUser: User;
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private _bookingSystemService: BookingSystemService,
        private route: ActivatedRoute,
        private router: Router,
        private settingsService: SettingsService,
        private alertService: AlertService,
        private userService: UserService
    ) {  this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }
    ngOnInit() {
        this.settingsService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    login(event: any) { // without type info
        this.loading = true;
        this.settingsService.login(this.model.exchangeserver, this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
