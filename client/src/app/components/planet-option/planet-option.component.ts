import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-planet-option',
  standalone: true,
  imports: [],
  templateUrl: './planet-option.component.html',
  styleUrl: './planet-option.component.sass'
})
export class PlanetOptionComponent {

  @Input() data: any;
  @Input() key!: number;
  @Input() currentPlanet: any = '';
  @Output() currentPlanetChange = new EventEmitter<any>();

  constructor() { }

  handlePlanetChange() {
    this.currentPlanet = this.data[this.key];
    this.currentPlanetChange.emit(this.currentPlanet);
    console.log(this.currentPlanet);
    
    const planetSelectorLarge = document.querySelector('app-planet-selector-large');
    if (planetSelectorLarge) {
      planetSelectorLarge.setAttribute('style', 'margin-top: 0vh');
    }
  }

}
