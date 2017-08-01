import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoPageComponent } from './components/info-page/info-page.component';
import {SettingsPageComponent} from './components/settings/settings-page.component';

const APP_ROUTES: Routes = [
  { path: 'info', component: InfoPageComponent },
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'settings', component: SettingsPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],

  exports: [ RouterModule ],
})
export class AppRoutingModule { }
