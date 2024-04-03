import { Component, Input } from '@angular/core';
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

  constructor() { }

  handlePlanetChange() {
    console.log(this.data[this.key].name);
    const planetSelectorLarge = document.querySelector('app-planet-selector-large');
    if (planetSelectorLarge) {
      planetSelectorLarge.setAttribute('style', 'margin-top: 0vh');
    }
  }

}
