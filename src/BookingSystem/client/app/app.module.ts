import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { InfoPageComponent } from './info-page.component';
import { RoomTitleComponent } from './room-title.component';
import { CurrentTimeComponent } from './current-time.component';
import { RoomStatusComponent } from './room-status.component';
import { NextMeetingInfoComponent } from './next-meeting-info.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InfoPageComponent,
    RoomTitleComponent,
    CurrentTimeComponent,
    RoomStatusComponent,
    NextMeetingInfoComponent,
  ],

  providers: [],

  bootstrap: [ AppComponent ],
})
export class AppModule {
}
