import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { InterfaceListadoNaves } from '../interfaces/interface-listado-naves';
import { Pilot } from '../interfaces/pilot';
import { Movie } from '../interfaces/movie';


@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }
  

  // Método para obtener la lista de naves
  getStarships(page: number = 1): Observable<InterfaceListadoNaves[]> {
    return this.http.get<any>(`${this.baseUrl}/starships/?page=${page}`).pipe(
      map(response => response.results)
    );
  }



  
    getPilot(url: string): Observable<Pilot> {
    return this.http.get<Pilot>(url);
  }

  // Método para obtener los detalles de una nave específica
  getStarship(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/starships/${id}`);
  }

  getMovie(url: string): Observable<Movie> {
    return this.http.get<Movie>(url);
  }
  
}

