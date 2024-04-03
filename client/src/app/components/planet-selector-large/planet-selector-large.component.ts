import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetService } from '../../services/planet.service';
import { PlanetOptionLargeComponent } from '../planet-option-large/planet-option-large.component';

@Component({
  selector: 'app-planet-selector-large',
  standalone: true,
  imports: [ CommonModule, PlanetOptionLargeComponent ],
  templateUrl: './planet-selector-large.component.html',
  styleUrl: './planet-selector-large.component.sass'
})
export class PlanetSelectorLargeComponent {
  
  data: any;
  key: number = 0;

  constructor(private service: PlanetService) { }

  ngOnInit() {
    console.log("Inventory Item Component Initialized");
    this.service.getAllPlanets().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
      
  }

  minimize() {
    const planetSelectorLarge = document.querySelector('app-planet-selector-large');
    if (planetSelectorLarge) {
      planetSelectorLarge.setAttribute('style', 'margin-top: 0vh');
    }
  }

}
