import { Component, Input, input } from '@angular/core';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-collectable',
  standalone: true,
  imports: [],
  templateUrl: './collectable.component.html',
  styleUrl: './collectable.component.sass'
})
export class CollectableComponent {

  @Input() data: any;
  @Input() index!: number;
  @Input() currentPlanet: any;

  constructor(private service: ResourceService) {}

  handleCollect() {
    // console.log('collecting: ', this.data[this.index].resource.collect_cost);
    
    this.service.collectItem(
      this.currentPlanet.name,
      this.data[this.index].resource.name,
      this.data[this.index].resource.id,
    );
  }


}
