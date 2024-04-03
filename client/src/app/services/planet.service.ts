import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private planet: string = 'Sylva';

  constructor(private http: HttpClient) { }

  getPlanet() {
    return this.planet;
  }

  setPlanet(planet: any) {
    this.planet = planet;
  }


  private baseUrl = 'http://localhost:3001/planets';

  getAllPlanets(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
