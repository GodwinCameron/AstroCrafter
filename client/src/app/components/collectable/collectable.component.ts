import { Component, Input, input } from '@angular/core';

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


}
