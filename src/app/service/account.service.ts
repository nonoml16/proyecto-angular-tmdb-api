import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AccountDetailResponse } from '../models/account-detail.interface';
import { Observable } from 'rxjs';
import { StatusCodeResponse } from '../models/status-code.interface';
import { ListRatedMoviesResponse } from '../models/list-ratedmovies.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountDetailResponse> {
    return this.http.get<AccountDetailResponse>(`${environment.apiBaseUrl}/account?session_id=${localStorage.getItem('session_id')}`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }
  getRatedMovies(): Observable<ListRatedMoviesResponse> {
    return this.http.get<ListRatedMoviesResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem('account_id')}/rated/movies?session_id=${localStorage.getItem('session_id')}&api_key=${environment.apiKey}`);
  }
}
