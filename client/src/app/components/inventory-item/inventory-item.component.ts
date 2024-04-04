import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-inventory-item',
  standalone: true,
  imports: [ItemCardComponent, CommonModule],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.sass'
})
export class InventoryItemComponent {

  data: any;
  @Input() currentPlanet: any;

  // data = [
    // { name: "CARBON", quantity: 404, icon: "carbon.png", image: "carbon.png" },
    // { name: "GLASS", quantity: 65, icon: "glass.png", image: "glass.png"},
    // { name: "CERAMIC", quantity: 12, icon: "ceramic.png", image: "ceramic.png" },
    // { name: "ALUMINUM", quantity: 55, icon: "aluminum.png", image: "aluminum.png" },
    // { name: "COPPER", quantity: 45, icon: "copper.png", image: "copper.png" },
    // { name: "TUNGSTEN", quantity: 5, icon: "tungsten.png", image: "tungsten.png" },
    // { name: "IRON", quantity: 35, icon: "iron.png", image: "iron.png" },
    // { name: "ZINC", quantity: 25, icon: "zinc.png", image: "zinc.png" },
    // { name: "TITANIUM", quantity: 15, icon: "titanium.png", image: "titanium.png" },
    // { name: "COMPOUND", quantity: 20, icon: "compound.png", image: "compound.png" },
    // { name: "RESIN", quantity: 55, icon: "resin.png", image: "resin.png" },
    // { name: "ORGANIC", quantity: 10, icon: "organic.png", image: "organic.png" },
    // { name: "CLAY", quantity: 12, icon: "clay.png", image: "clay.png" },
    // { name: "AMMONIUM", quantity: 25, icon: "ammonium.png", image: "ammonium.png" },
    // { name: "GRAPHITE", quantity: 15, icon: "graphite.png", image: "graphite.png" },
    // { name: "QUARTZ", quantity: 30, icon: "quartz.png", image: "quartz.png" },
    // { name: "LATERITE", quantity: 40, icon: "laterite.png", image: "laterite.png" },
    // { name: "MALACHITE", quantity: 50, icon: "malachite.png", image: "malachite.png" },
    // { name: "SPHALERITE", quantity: 60, icon: "sphalerite.png", image: "sphalerite.png" },
    // { name: "WOLFRAMITE", quantity: 32, icon: "wolframite.png", image: "wolframite.png" },
    // { name: "LITHIUM", quantity: 8, icon: "lithium.png", image: "lithium.png" },
    // { name: "HEMATITE", quantity: 18, icon: "hematite.png", image: "hematite.png" },
    // { name: "TITANITE", quantity: 28, icon: "titanite.png", image: "titanite.png" },
    // { name: "ASTRONIUM", quantity: 38, icon: "astronium.png", image: "astronium.png" },
  // ]
  key: number = 0;

  constructor(private service: ResourceService) { }

  ngOnInit() {
    if (this.currentPlanet.name === undefined) {
      this.service.getAllResources("sylva").subscribe((data) => {
        this.data = data.sort((a,b) => a.id - b.id);
      });
    } else {
      this.service.getAllResources(this.currentPlanet.name).subscribe((data) => {
        this.data = data.sort((a,b) => a.id - b.id);
      });
    }     
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentPlanet'] && !changes['currentPlanet'].firstChange) {
      this.service.getAllResources(this.currentPlanet.name).subscribe((data) => {
        this.data = data.sort((a,b) => a.id - b.id);
      });
    }
  }
}
