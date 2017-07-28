import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MdDialog, MdDialogRef } from '@angular/material';

import { BookingSystemService } from '../../services/booking-system.service';
import { ResponseStatus } from '../../types/response-status';
import { DialogData } from './dialog-data';
import { ServerConnectionMonitorDialogComponent } from './server-connection-monitor-dialog.component'

@Component({
  selector: 'bs-server-connection-monitor',

  templateUrl: './server-connection-monitor.component.html',

  styleUrls: [
    './server-connection-monitor.component.css',
  ],
})
export class ServerConnectionMonitorComponent implements OnInit {
  responseStatusObs: Observable<ResponseStatus>;

  private _firstErrorDate: Date;
  private _retriesCount = -1;

  private _dialogData: DialogData;
  private _dialogDataSubj: BehaviorSubject<DialogData>;

  private _dialogRef: MdDialogRef<ServerConnectionMonitorDialogComponent>;

  constructor(
    private _bookingSystemService: BookingSystemService,
    private _dialog: MdDialog,
  ) { }

  ngOnInit() {
    this.responseStatusObs = this._bookingSystemService.getResponseStatus();

    this._dialogData = {
      responseStatus: undefined,

      firstErrorDate: undefined,

      retriesCount: -1,
    };
    this._dialogDataSubj = new BehaviorSubject<DialogData>(undefined);

    this.responseStatusObs.subscribe(next => {
      if (!next.isSuccess()) {
        if (!this._firstErrorDate) {
          this._firstErrorDate = next.date;
        }

        if (this._retriesCount !== -1) {
          ++this._retriesCount;
        } else {
          this._retriesCount = 0;
        }

        if (!this._dialogRef) {
          this._openDialog(this._getDialogData());
        }

        this._setDialogData({
          responseStatus: next,

          firstErrorDate: this._firstErrorDate,

          retriesCount: this._retriesCount,
        });
      } else {
        this._firstErrorDate = undefined;
        this._retriesCount = -1;

        this._setDialogData(undefined);

        this._closeDialog();
      }
    });
  }

  private _openDialog(dialogDataObs: Observable<DialogData>): void {
    if (this._dialogRef) {
      this._closeDialog();
    }

    this._dialogRef = this._dialog.open(ServerConnectionMonitorDialogComponent, {
      disableClose: true,

      data: dialogDataObs,
    });
  }

  private _closeDialog(): void {
    if (this._dialogRef) {
      this._dialogRef.close();
      this._dialogRef = undefined;
    }
  }

  private _setDialogData(dialogData: DialogData): void {
    this._dialogData = dialogData;
    this._dialogDataSubj.next(this._dialogData);
  }

  private _getDialogData(): Observable<DialogData> {
    return this._dialogDataSubj.asObservable();
  }
}
