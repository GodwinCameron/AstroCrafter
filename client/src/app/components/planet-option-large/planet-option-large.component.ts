import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet-option-large',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './planet-option-large.component.html',
  styleUrl: './planet-option-large.component.sass'
})
export class PlanetOptionLargeComponent {

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
