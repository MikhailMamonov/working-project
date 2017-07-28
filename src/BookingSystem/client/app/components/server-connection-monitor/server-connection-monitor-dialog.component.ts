import { Component, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { DialogData } from './dialog-data';

@Component({
  selector: 'bs-server-connection-monitor-dialog',

  templateUrl: './server-connection-monitor-dialog.html',
})
export class ServerConnectionMonitorDialogComponent {
  constructor(
    private _dialogRef: MdDialogRef<ServerConnectionMonitorDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: Observable<DialogData>,
  ) { }
}
