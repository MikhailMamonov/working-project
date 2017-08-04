/**
 * Created by mamon on 03.08.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class SettingsService {
    constructor(private http: Http) { }


}