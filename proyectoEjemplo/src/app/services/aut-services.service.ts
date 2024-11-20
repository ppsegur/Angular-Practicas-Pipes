import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRequestTokenResponse } from '../models/interfaces.interface';
//Screaming snake case
const API_KEY = '433d2c486572afb242c6fe7c1ddc6771'
@Injectable({
  providedIn: 'root'
})
export class AutServicesService {

  constructor(private http: HttpClient) { }

  createRequestToken(): Observable<CreateRequestTokenResponse> {
    return this.http.get<CreateRequestTokenResponse>(`https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}
`);
  }
  createSession(requestToken: string): Observable<any> {
    return this.http.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`, {
      request_token: localStorage.getItem('request_token')
    });
  }
}
