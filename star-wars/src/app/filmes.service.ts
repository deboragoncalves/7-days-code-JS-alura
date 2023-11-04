import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export type ResponseAPIMovies = {
  count: number,
  next: null,
  previous: null,
  results: Array<Movie>
}

export type Movie = {
  title: string, 
  episode_id: number, 
  opening_crawl: string, 
  director: string, 
  producer: string, 
  release_date: string, 
  characters: Array<string>, 
  planets: Array<string>, 
  starships: Array<string>, 
  vehicles: Array<string>, 
  species: Array<string>, 
  created: string, 
  edited: string, 
  url: string
}

@Injectable({
  providedIn: 'root'
})
  
export class FilmesService {
  baseUrlMovies: string = "https://swapi.dev/api";

  constructor(public http: HttpClient) { }

  getMovies(): Observable<ResponseAPIMovies> {
    return this.http.get<ResponseAPIMovies>(`${this.baseUrlMovies}/films`);
  }

  
}
