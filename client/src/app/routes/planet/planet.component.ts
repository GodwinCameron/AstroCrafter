import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import { InventoryItemComponent } from '../../components/inventory-item/inventory-item.component';
import { MainPanelComponent } from '../../components/main-panel/main-panel.component';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { PlanetService } from '../../services/planet.service';
import { PlanetSelectorLargeComponent } from '../../components/planet-selector-large/planet-selector-large.component';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [
    InventoryItemComponent,
    MainPanelComponent,
    TopNavComponent,
    PlanetSelectorLargeComponent,
  ],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.sass',
})
export class PlanetComponent implements AfterViewInit {
  color: string = '#00ADEB';
  currentPlanet: any = {
    name: 'Sylva',
    image: 'https://astroneer.wiki/wp-content/uploads/2022/06/silva-1.webp',
    changed: false,
  };

  constructor(
    private planetService: PlanetService,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    const planetSelectorLarge = document.querySelector(
      'app-planet-selector-large'
    );
    if (planetSelectorLarge) {
      this.renderer.setStyle(planetSelectorLarge, 'marginTop', '0vh');
    }
  }

  getCurrentPlanet(): string {
    return this.planetService.getPlanet();
  }
  changePlanet() {
    const planetSelectorLarge = document.querySelector(
      'app-planet-selector-large'
    );
    if (planetSelectorLarge) {
      this.renderer.setStyle(planetSelectorLarge, 'marginTop', '-100vh');
    }
  }
  handleCurrentPlanetChange(newCurrentPlanet: any) {
    this.currentPlanet = newCurrentPlanet;
    // Perform any additional actions here
  }
}
