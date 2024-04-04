import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { PlanetOptionComponent } from '../planet-option/planet-option.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet-selector',
  standalone: true,
  imports: [PlanetOptionComponent, CommonModule],
  templateUrl: './planet-selector.component.html',
  styleUrl: './planet-selector.component.sass',
})
export class PlanetSelectorComponent {

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
