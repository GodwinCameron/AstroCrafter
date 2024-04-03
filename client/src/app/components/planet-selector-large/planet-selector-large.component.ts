import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() currentPlanet: any = '';
  @Output() currentPlanetChange = new EventEmitter<any>();

  constructor(private service: PlanetService) { }

  ngOnInit() {
    this.service.getAllPlanets().subscribe((data) => {
      this.data = data;
    });
      
  }

  minimize() {
    const planetSelectorLarge = document.querySelector('app-planet-selector-large');
    if (planetSelectorLarge) {
      planetSelectorLarge.setAttribute('style', 'margin-top: 0vh');
    }
  }

  handleCurrentPlanetChange(newCurrentPlanet: any) {
    this.currentPlanet = newCurrentPlanet;
    this.currentPlanetChange.emit(this.currentPlanet);
  }

}
