import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TvShowListResponse } from '../models/tv-show-list.interface';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { TvShowDetailResponse } from '../models/tv-show-detail.interface';
import { GenreResponse } from '../models/genre.interface';
import { CreditsResponse } from '../models/credits-interface';
import { TvShowCreditsResponse } from '../models/tv-show-credits.interface';
import { TrailerListResponse } from '../models/trailer-list.interface';

const TV_SHOW_BASE_URL = 'tv';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private http: HttpClient) { }

  getListAiringTday(page:number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/airing_today?api_key=${environment.apiKey}&&page=${page}`);
  }

  getListTopRated(page:number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/top_rated?api_key=${environment.apiKey}&&page=${page}`);
  }

  getListOnTheAir(page:number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/on_the_air?api_key=${environment.apiKey}&&page=${page}`);
  }

  getListPopular(page:number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/popular?api_key=${environment.apiKey}&&page=${page}`);
  }

  getTvShow(id: number): Observable<TvShowDetailResponse> {
    return this.http.get<TvShowDetailResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/${id}?api_key=${environment.apiKey}`);
  }
  
  getListNoPage(): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/${TV_SHOW_BASE_URL}/popular?api_key=${environment.apiKey}`);
  }

  getGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`${environment.apiBaseUrl}/genre/${TV_SHOW_BASE_URL}/list?api_key=${environment.apiKey}`);
  }

  getCredits(id: number): Observable<TvShowCreditsResponse> {
    return this.http.get<CreditsResponse>(`${environment.apiBaseUrl}/tv/${id}/credits?api_key=${environment.apiKey}`);
  }

  getListTvShowByIdMovie(id: number): Observable<TrailerListResponse> {
    return this.http.get<TrailerListResponse>(`${environment.apiBaseUrl}/${id}/videos?api_key=${environment.apiKey}`);
  }
}
