import { Injectable } from '@angular/core';
import { MovieListResponse } from '../models/movie-list.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieDetailResponse } from '../models/movie-detail.interface';
import { environment } from 'src/environments/environment';
import { GenreResponse } from '../models/genre.interface';
import { MovieCreditsResponse } from '../models/movie-credits.interface';

const MOVIE_BASE_URL = 'movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }


  /*getListP(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/now_playing?api_key=${environment.apiKey}`);
  }

  getList(page:number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/now_playing?api_key=${environment.apiKey}&&page=${page}`);
  }

  getMovie(id: number): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/${id}?api_key=${environment.apiKey}`);
  }*/

  getPopularList(page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`https://api.themoviedb.org/3/movie/popular?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc&&page=${page}`);
  }

  getMovieById(id: number): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`https://api.themoviedb.org/3/movie/${id}?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }


  getListP(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`https://api.themoviedb.org/3/${MOVIE_BASE_URL}/now_playing?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }

  getGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`https://api.themoviedb.org/3/genre/movie/list?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }

  getList(page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`https://api.themoviedb.org/3/${MOVIE_BASE_URL}/now_playing?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc&&page=${page}`);
  }

  getMovie(id: number): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`https://api.themoviedb.org/3/${MOVIE_BASE_URL}/${id}?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }

  getMovieCredits(id: number): Observable<MovieCreditsResponse>{
    return this.http.get<MovieCreditsResponse>(`https://api.themoviedb.org/3/${MOVIE_BASE_URL}/${id}/credits?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc`);
  }
}