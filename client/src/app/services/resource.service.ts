import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat, concatMap, switchMap } from 'rxjs';

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

          const currentItem = items.find((item: any) => item.id === itemId);
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

  craftItem(planetName: any, recipe: any, ingredient1: any, ingredient2: any) {
    console.log('Crafting: ',recipe.name,' at planet: ', planetName, " using: ", ingredient1, " and ", ingredient2);
    if(ingredient2.item === null){
    this.http.get<any>(this.baseUrl + planetName).pipe(
      concatMap((items) => {
        const currentQuantity1 = items.find((item: any) => item.id === ingredient1.item.id).quantity;
        const newQuantity1 = currentQuantity1 - ingredient1.amount;
        const body1 = { name: ingredient1.item.name, id: ingredient1.item.id, quant: newQuantity1 };
        return concat(
          this.http.put<any[]>(this.baseUrl + planetName, body1)
        );
      })
    ).subscribe(() => {
      console.log('Ingredient 1 used');
    });
  } else {
    console.log("crafting with 2 ingredients");
    
    this.http.get<any>(this.baseUrl + planetName).pipe(
      concatMap((items) => {
        const currentQuantity1 = items.find((item: any) => item.id === ingredient1.item.id).quantity;
        const newQuantity1 = currentQuantity1 - ingredient1.amount;
        const body1 = { name: ingredient1.item.name, id: ingredient1.item.id, quant: newQuantity1 };
        return concat(
          this.http.put<any[]>(this.baseUrl + planetName, body1)
        );
      }),
      concatMap(() => {
        return this.http.get<any>(this.baseUrl + planetName);
      }),
      concatMap((items) => {
        const currentQuantity2 = items.find((item: any) => item.id === ingredient2.item.id).quantity;
        const newQuantity2 = currentQuantity2 - ingredient2.amount;
        const body2 = { name: ingredient2.item.name, id: ingredient2.item.id, quant: newQuantity2 };
        return concat(
          this.http.put<any[]>(this.baseUrl + planetName, body2)
        );
      })
    ).subscribe(() => {
      console.log('Ingredients used');
    });
  }
  }
}
