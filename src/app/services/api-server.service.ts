import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {InterfaceListadoNaves} from '../interfaces/interface-listado-naves'

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {

  private apiUrl = 'https://swapi.dev/api/starships';

  constructor(
    private http: HttpClient) { }
    
      getStarships(page: number = 1): Observable<InterfaceListadoNaves[]> {
        return this.http.get<any>(this.apiUrl).pipe(
          map(data => data.results as InterfaceListadoNaves[])
        );
      }     

}
