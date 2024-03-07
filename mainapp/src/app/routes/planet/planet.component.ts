import { Component } from '@angular/core';
import { InventoryItemComponent } from '../../components/inventory-item/inventory-item.component';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [InventoryItemComponent],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.sass'
})
export class PlanetComponent {

}
