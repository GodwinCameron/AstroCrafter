import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3001/inventory/';

  getAllResources(planetName: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + planetName);
  }

  discardItem(planetName: string, name: string, itemId: number) {
    const body = { name: name, id: itemId, quant: 0 };
    console.log(this.baseUrl + planetName, body);
    this.http.put<any[]>(this.baseUrl + planetName, body).subscribe();
    return;
  }

  collectItem(planetName: string, name: string, itemId: number) {
    this.http
      .get<any>(this.baseUrl + planetName)
      .pipe(
        concatMap((items) => {

          // const currentQuantity = items[itemId - 1].quantity; 
          // const newQuantity = currentQuantity + 1;
  
          const currentItem = items.find((item : any) => item.id === itemId);
          if (!currentItem) {
            throw new Error('Item not found');
          }
          const currentQuantity = currentItem.quantity;
          const newQuantity = currentQuantity + 1;


  
          const body = { name: name, id: itemId, quant: newQuantity };
          return this.http.put<any[]>(this.baseUrl + planetName, body);
        })
      )
      .subscribe(() => {
        console.log('Item collected');
      });
  }
  
}





