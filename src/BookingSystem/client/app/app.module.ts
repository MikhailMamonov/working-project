import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { InfoPageComponent } from './info-page.component';
import { RoomNameComponent } from './room-name.component';
import { CurrentTimeComponent } from './current-time.component';
import { RoomStatusComponent } from './room-status.component';
import { NextMeetingInfoComponent } from './next-meeting-info.component';

import { BookingSystemService } from './booking-system.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryMeetingRoomsService } from './in-memory-meeting-rooms.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryMeetingRoomsService),
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InfoPageComponent,
    RoomNameComponent,
    CurrentTimeComponent,
    RoomStatusComponent,
    NextMeetingInfoComponent,
  ],

  providers: [
    BookingSystemService,
  ],

  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
