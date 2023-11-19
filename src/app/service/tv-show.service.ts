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

  getListAiringTday(page: number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`https://api.themoviedb.org/3/${TV_SHOW_BASE_URL}/airing_today?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc&&page=${page}`);
  }

  getListTopRated(page: number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`https://api.themoviedb.org/3/${TV_SHOW_BASE_URL}/top_rated?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc&&page=${page}`);
  }

  getListOnTheAir(page: number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`https://api.themoviedb.org/3/${TV_SHOW_BASE_URL}/on_the_air?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc&&page=${page}`);
  }

  getListPopular(page: number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`https://api.themoviedb.org/3/${TV_SHOW_BASE_URL}/popular?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc&&page=${page}`);
  }

  getTvShow(id: number): Observable<TvShowDetailResponse> {
    return this.http.get<TvShowDetailResponse>(`https://api.themoviedb.org/3/${TV_SHOW_BASE_URL}/${id}?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }

  getListNoPage(): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`https://api.themoviedb.org/3/${TV_SHOW_BASE_URL}/popular?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }

  getGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`https://api.themoviedb.org/3/genre/tv/list?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }

  getCredits(id: number): Observable<TvShowCreditsResponse> {
    return this.http.get<CreditsResponse>(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }

  getByName(name: string, page: number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`${environment.apiBaseUrl}/search/tv?api_key=${environment.apiKey}&query=${name}&&page=${page}`);
  }

  getListTvShowByIdMovie(id: number): Observable<TrailerListResponse> {
    return this.http.get<TrailerListResponse>(`https://api.themoviedb.org/3/${id}/videos?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }
}
