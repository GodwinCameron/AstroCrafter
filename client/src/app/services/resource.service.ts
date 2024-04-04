import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3001/inventory/';

  getAllResources(planetName: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+planetName);
  }

  discardItem(planetName: string, name: string, itemId: number) {
    const body = { name:name, id: itemId, quant: 0 };
    console.log(this.baseUrl+planetName, body);
    this.http.put<any[]>(this.baseUrl+planetName, body).subscribe();
    return;
  }


}
