import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL_USER;
  readonly ROOT_URL_GAME;

  constructor(private http: HttpClient) { 
    this.ROOT_URL_USER = 'https://user-y4shapg4za-lm.a.run.app';
    this.ROOT_URL_GAME = 'https://room-y4shapg4za-lm.a.run.app';
  }

  getUser(uri: string){
    return this.http.get(`${this.ROOT_URL_USER}/${uri}`);
  }

  postUser(uri: string, payload: Object){
    return this.http.post(`${this.ROOT_URL_USER}/${uri}`, payload);
  }

  patchUser(uri: string, payload: Object){
    return this.http.patch(`${this.ROOT_URL_USER}/${uri}`, payload);
  }

  deleteUser(uri: string){
    return this.http.delete(`${this.ROOT_URL_USER}/${uri}`);
  }

  getGame(uri: string, payload: Object){
    return this.http.get(`${this.ROOT_URL_GAME}/${uri}`, payload);
  }

  postGame(uri: string, payload: Object){
    return this.http.post(`${this.ROOT_URL_GAME}/${uri}`, payload);
  }

  patchGame(uri: string, payload: Object){
    return this.http.patch(`${this.ROOT_URL_GAME}/${uri}`, payload);
  }

  deleteGame(uri: string, payload: Object){
    return this.http.delete(`${this.ROOT_URL_GAME}/${uri}`, payload);
  }
}
