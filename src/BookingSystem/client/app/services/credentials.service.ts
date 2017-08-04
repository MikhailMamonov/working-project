/**
 * Created by mamon on 03.08.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Credentials} from '../types/credentials';



@Injectable()
export class CredentialsService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/credentials', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/credentials/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(credentials: Credentials) {
        return this.http.post('/api/credentials', credentials, this.jwt()).map((response: Response) => response.json());
    }

    update(credentials: Credentials) {
        return this.http.put('/api/credentials/' + credentials.id, credentials, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/credentials/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        const currentCredentials = JSON.parse(localStorage.getItem('currentCredentials'));
        if (currentCredentials && currentCredentials.token) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentCredentials.token });
            return new RequestOptions({ headers: headers });
        }
    }
}