import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RefineItemComponent } from '../refine-item/refine-item.component';
import { ResourceService } from '../../services/resource.service';
import { RefinablesService } from '../../services/refinables.service';

@Component({
  selector: 'app-refinery',
  standalone: true,
  imports: [CommonModule, RefineItemComponent],
  templateUrl: './refinery.component.html',
  styleUrl: './refinery.component.sass'
})
export class RefineryComponent {

  @Input() currentPlanet: any;
  @Input() inventory: any;
  @Input() refinables: any;

  constructor(private resourceService: ResourceService, private refinablesService: RefinablesService) { }

  ngOnInit() {
    this.resourceService.getAllResources(this.currentPlanet.name).subscribe((data) => {
      this.inventory = data;
      console.log(this.inventory);
      
    });
    this.refinablesService.getAllRefinables().subscribe((data) => {
      this.refinables = data;
    });
  }

}
