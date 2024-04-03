import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3001/';

  getAllResources(planetName: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+planetName);
  }

}
