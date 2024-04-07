import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-refine-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './refine-item.component.html',
  styleUrl: './refine-item.component.sass'
})
export class RefineItemComponent {

  @Input() refinable: any;
  @Input() currentPlanet: any;
  @Input() inventory: any;

  @Input() raw: any;
  @Input() resource: any;

  constructor(private service: ResourceService) { }

  ngOnInit() {
    var rawId = this.refinable.raw.id;
    this.raw = this.refinable.raw;
    this.resource = this.inventory[rawId-1];
    console.log(this.resource);
  }

  refine(rawId: number, refinedId: number){
    this.service.refineResource(this.currentPlanet.name, rawId, refinedId)
    console.log("sent to service",this.currentPlanet.name, rawId, refinedId);
  }

}
