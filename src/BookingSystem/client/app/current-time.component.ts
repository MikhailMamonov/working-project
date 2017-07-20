import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'bs-current-time',

  templateUrl: './current-time.component.html',

  styleUrls: [
    './current-time.component.css',
  ],
})
export class CurrentTimeComponent implements OnInit {
  now = Observable
    .interval(1000)
    .map(val => new Date());

  ngOnInit() { }
}
