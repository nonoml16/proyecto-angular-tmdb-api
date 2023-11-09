import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TvShowListResponse } from '../models/tv-show-list.interface';
import { environment } from 'src/app/environments/environment';
import { Observable } from 'rxjs';
import { TvShowDetailResponse } from '../models/tv-show-detail.interface';

const TV_SHOW_BASE_URL = 'tv';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private http: HttpClient) { }

  getList(page:number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/now_playing?api_key=${environment.apiKey}&&page=${page}`);
  }

  getTvShow(id: number): Observable<TvShowDetailResponse> {
    return this.http.get<TvShowDetailResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/${id}?api_key=${environment.apiKey}`);
  }
}
