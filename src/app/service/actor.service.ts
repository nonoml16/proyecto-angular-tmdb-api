import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActorListResponse } from '../models/actor-list.interface';
import { ActorDetailResponse } from '../models/actor-detail.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const ACTOR_BASE_URL = 'person';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  getList(page: number): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(`${environment.apiBaseUrl}/${ACTOR_BASE_URL}/now_playing?api_key=${environment.apiKey}&&page=${page}`);
  }

  getTvShow(id: number): Observable<ActorDetailResponse> {
    return this.http.get<ActorDetailResponse>(`${environment.apiBaseUrl}/${ACTOR_BASE_URL}/${id}?api_key=${environment.apiKey}`);
  }
}
