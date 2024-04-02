import { Component } from '@angular/core';

@Component({
  selector: 'app-planet-selector-large',
  standalone: true,
  imports: [],
  templateUrl: './planet-selector-large.component.html',
  styleUrl: './planet-selector-large.component.sass'
})
export class PlanetSelectorLargeComponent {

  constructor() { }

  minimize() {
    const planetSelectorLarge = document.querySelector('app-planet-selector-large');
    if (planetSelectorLarge) {
      planetSelectorLarge.setAttribute('style', 'margin-top: 0vh');
    }
  }

}
