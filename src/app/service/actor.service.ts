import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActorListResponse } from '../models/actor-list.interface';
import { ActorDetailResponse } from '../models/actor-detail.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { MoviePersonResponse } from '../models/actor-movie.interface';
import { TvShowsPersonResponse } from '../models/actor-tvshow.interface';

const ACTOR_BASE_URL = 'person';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  getList(page: number): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(`https://api.themoviedb.org/3/person/popular?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc&&page=${page}`);
  }

  getById(id: number): Observable<ActorDetailResponse> {
    return this.http.get<ActorDetailResponse>(`${environment.apiBaseUrl}/${ACTOR_BASE_URL}/${id}?api_key=${environment.apiKey}`);
  }

  getMovies(id: number): Observable<MoviePersonResponse> {
    return this.http.get<MoviePersonResponse>(`${environment.apiBaseUrl}/person/${id}/movie_credits?${environment.apiKey}`);
  }

  getTvShows(id: number): Observable<TvShowsPersonResponse> {
    return this.http.get<TvShowsPersonResponse>(`${environment.apiBaseUrl}/person/${id}/tv_credits?${environment.apiKey}`);
  }
}
