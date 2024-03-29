import { Component } from '@angular/core';
import { InventoryItemComponent } from '../../components/inventory-item/inventory-item.component';
import { MainPanelComponent } from '../../components/main-panel/main-panel.component';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [InventoryItemComponent, MainPanelComponent, TopNavComponent],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.sass'
})
export class PlanetComponent {

}
