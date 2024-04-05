import { Component, Input } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { CollectableComponent } from '../collectable/collectable.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-collector',
  standalone: true,
  imports: [CollectableComponent, CommonModule],
  templateUrl: './item-collector.component.html',
  styleUrl: './item-collector.component.sass',
})
export class ItemCollectorComponent {
  data: any;
  @Input() currentPlanet: any;

  key: number = 0;

  constructor(private service: ResourceService) {}

  ngOnInit() {
    if (!this.data) {
      this.service.getAllResources(this.currentPlanet.name).subscribe((data) => {
        this.data = data.sort((a, b) => a.id - b.id);
        console.log(this.data);
      });
    }
  }
  
}
