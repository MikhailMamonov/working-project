﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import {
    MdCoreModule, MdProgressSpinnerModule, MdDialogModule, MdInputModule, MdButtonModule, MdChipsModule, MdToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { CurrentTimeComponent } from './components/current-time/current-time.component';
import { RoomInfoComponent } from './components/room-info/room-info.component';
import { RoomNameComponent } from './components/room-name/room-name.component';
import { RoomStatusComponent } from './components/room-status/room-status.component';
import { MeetingInfoComponent } from './components/meeting-info/meeting-info.component';
import { ServerConnectionMonitorComponent } from './components/server-connection-monitor/server-connection-monitor.component';
import { ServerConnectionMonitorDialogComponent } from './components/server-connection-monitor/server-connection-monitor-dialog.component';
import { CarouselDirective } from './directives/carousel/carousel.directive';

import { BookingSystemService } from './services/booking-system.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryMeetingRoomsService } from './mock/in-memory-meeting-rooms.service';
import {SettingsPageComponent} from './components/settings/settings-page.component';
import {SettingsInfoComponent} from './components/settings-info/settings-info.component';
import {InMemoryCredentialsService} from './mock/in-memory-credentials.service';
import {HttpClientModule} from "@angular/common/http";
import {AlertService} from "./services/alert.service";
import {LocalStorageModule} from "angular-2-local-storage";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryMeetingRoomsService),
    BrowserAnimationsModule,
    MdCoreModule,
    MdProgressSpinnerModule,
    LocalStorageModule.withConfig({
      prefix: 'TodoList',
      storageType: 'localStorage',
    }),
    MdDialogModule,
      MdInputModule,
      MdButtonModule,
      MdChipsModule,
      MdToolbarModule

  ],
  declarations: [
    AppComponent,
    InfoPageComponent,
    CurrentTimeComponent,
    SettingsPageComponent,
    RoomInfoComponent,
    SettingsInfoComponent,
    RoomNameComponent,
    RoomStatusComponent,
    MeetingInfoComponent,
    ServerConnectionMonitorComponent,
    ServerConnectionMonitorDialogComponent,
    CarouselDirective,
  ],

  entryComponents: [
    ServerConnectionMonitorDialogComponent,
  ],

  providers: [
    BookingSystemService,
      AlertService

  ],

  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
