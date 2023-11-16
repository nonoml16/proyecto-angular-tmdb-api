import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TvShowListResponse } from '../models/tv-show-list.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TvShowDetailResponse } from '../models/tv-show-detail.interface';
import { GenreResponse } from '../models/genre.interface';

const TV_SHOW_BASE_URL = 'tv';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private http: HttpClient) { }

  getListAiringTday(page:number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`https://api.themoviedb.org/3/${TV_SHOW_BASE_URL}/airing_today?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc&&page=${page}`);
  }

  getListTopRated(page:number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`https://api.themoviedb.org/3/${TV_SHOW_BASE_URL}/top_rated?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc&&page=${page}`);
  }

  getListOnTheAir(page:number): Observable<TvShowListResponse> {
    return this.http.get<TvShowListResponse>(`https://api.themoviedb.org/3/${TV_SHOW_BASE_URL}/on_the_air?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc&&page=${page}`);
  }

  getTvShow(id: number): Observable<TvShowDetailResponse> {
    return this.http.get<TvShowDetailResponse>(`https://api.themoviedb.org/3/${TV_SHOW_BASE_URL}/${id}?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }

  getGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`https://api.themoviedb.org/3/genre/tv/list?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }
}
