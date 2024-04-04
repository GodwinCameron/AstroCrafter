import { Component, Input } from '@angular/core';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.sass',
})
export class ItemCardComponent {
  @Input() data: any;
  @Input() key!: number;
  @Input() currentPlanet: any = '';

  // get dataNameLength(): number {
  //   return this.data.name.length;
  //   console.log(this.data.name.length);

  // }

  constructor(private service: ResourceService) {}

  handleDiscard() {
    console.log(
      'discarding: ',
      this.currentPlanet.name,
      this.data[this.key].resource.name,
      this.data[this.key].resource.id
    );

    this.service.discardItem(
      this.currentPlanet.name,
      this.data[this.key].resource.name,
      this.data[this.key].resource.id
    );
  }
}
