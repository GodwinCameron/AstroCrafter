import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private planet: string = 'Sylva';

  constructor() { }

  getPlanet() {
    return this.planet;
  }

  setPlanet(planet: any) {
    this.planet = planet;
  }
}
