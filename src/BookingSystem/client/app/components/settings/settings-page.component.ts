import {Component, HostListener, OnInit} from '@angular/core';

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
    invalid = false;
    _tableVisible=true;
    returnUrl: string;

    constructor(
        private _bookingSystemService: BookingSystemService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
    ) { }

    @HostListener('window:beforeunload')
    doSomething() {
        this._bookingSystemService._localStorageService.remove('currentUser');
    }

    ngOnInit() {
        this._bookingSystemService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    login(event: any) { // without type info
        let redirect = '/info';
        if (this._bookingSystemService.login(this.model.exchangeserver, this.model.username, this.model.password)) {
            this.invalid = false;
                    this.router.navigate([redirect]);
                }
                else {
            this.invalid = true;
        }
                }

    isInvalid() : boolean {
      return this.invalid ;
    }

    // tableVisible(): boolean{
    //     return this._tableVisible;
    // }

    addEvent(){
        this._tableVisible = false;
    }
    currentCrenentialsFilled(): boolean {
        return this._bookingSystemService.currentCrenentialsFilled();
    }

    }

