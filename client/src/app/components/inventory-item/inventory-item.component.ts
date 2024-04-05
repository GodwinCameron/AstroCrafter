import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';
import { ResourceService } from '../../services/resource.service';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-inventory-item',
  standalone: true,
  imports: [ItemCardComponent, CommonModule],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.sass',
})
export class InventoryItemComponent {
  data: any;
  @Input() currentPlanet: any;
  key: number = 0;

  constructor(private service: ResourceService) {}

  ngOnInit() {
    if (this.currentPlanet.name === undefined) {
      this.service.getAllResources('sylva').subscribe((data) => {
        this.data = data.sort((a, b) => a.id - b.id);
      });
    } else {
      this.service
        .getAllResources(this.currentPlanet.name)
        .subscribe((data) => {
          this.data = data.sort((a, b) => a.id - b.id);
          console.log(this.data);
        });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentPlanet'] && !changes['currentPlanet'].firstChange) {
      this.service
        .getAllResources(this.currentPlanet.name)
        .subscribe((data) => {
          this.data = data.sort((a, b) => a.id - b.id);
        });
    }
  }

  handleDataChange() {
    console.log('data changed');
    this.service
      .getAllResources(this.currentPlanet.name)
      .pipe(
        switchMap((data) => {
          this.data = data.sort((a, b) => a.id - b.id);
          return data;
        }),
        take(1)
      )
      .subscribe(() => {
        console.log(this.data);
      });
  }
}
