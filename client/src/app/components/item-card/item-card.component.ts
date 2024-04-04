import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() index!: number;
  @Input() currentPlanet: any = '';
  @Output() dataChanged = new EventEmitter<any>();

  constructor(private service: ResourceService) {}

  handleDiscard() {
    this.service.discardItem(
      this.currentPlanet.name,
      this.data[this.index].resource.name,
      this.data[this.index].resource.id
    );
    setTimeout(() => {
      this.dataChanged.emit();
    }, 100);
  }
}
