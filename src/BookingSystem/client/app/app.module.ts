import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { MdCoreModule, MdProgressSpinnerModule, MdDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { CurrentTimeComponent } from './components/current-time/current-time.component';
import { RoomInfoComponent } from './components/room-info/room-info.component';
import { RoomNameComponent } from './components/room-name/room-name.component';
import { RoomStatusComponent } from './components/room-status/room-status.component';
import { MeetingInfoComponent } from './components/meeting-info/meeting-info.component';
import { ServerConnectionMonitorComponent } from './components/server-connection-monitor/server-connection-monitor.component';
import { ServerConnectionMonitorDialogComponent } from './components/server-connection-monitor/server-connection-monitor-dialog.component'

import { BookingSystemService } from './services/booking-system.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryMeetingRoomsService } from './mock/in-memory-meeting-rooms.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryMeetingRoomsService),
    BrowserAnimationsModule,
    MdCoreModule,
    MdProgressSpinnerModule,
    MdDialogModule,
  ],

  declarations: [
    AppComponent,
    InfoPageComponent,
    CurrentTimeComponent,
    RoomInfoComponent,
    RoomNameComponent,
    RoomStatusComponent,
    MeetingInfoComponent,
    ServerConnectionMonitorComponent,
    ServerConnectionMonitorDialogComponent,
  ],

  entryComponents: [
    ServerConnectionMonitorDialogComponent,
  ],

  providers: [
    BookingSystemService,
  ],

  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
