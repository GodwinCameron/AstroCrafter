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
import { TransferPanelComponent } from '../../components/transfer-panel/transfer-panel.component';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [
    InventoryItemComponent,
    MainPanelComponent,
    TopNavComponent,
    PlanetSelectorLargeComponent,
    TransferPanelComponent
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
  walletAmount: string = localStorage.getItem('wallet') || '1000';
  wallet: number = parseInt(this.walletAmount);

  constructor(
    private planetService: PlanetService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
      const walletAmount = localStorage.getItem('wallet');
      if (!walletAmount) {
        localStorage.setItem('wallet', '1000');
      }
    }

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
  }
}
