import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoPageComponent } from './info-page.component';

const APP_ROUTES: Routes = [
  { path: 'info', component: InfoPageComponent },
  { path: '', redirectTo: '/info', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],

  exports: [ RouterModule ],
})
export class AppRoutingModule { }
