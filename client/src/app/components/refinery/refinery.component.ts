import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RefineItemComponent } from '../refine-item/refine-item.component';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-refinery',
  standalone: true,
  imports: [CommonModule, RefineItemComponent],
  templateUrl: './refinery.component.html',
  styleUrl: './refinery.component.sass'
})
export class RefineryComponent {

  @Input() currentPlanet: any;

  constructor(private service: ResourceService) { }

  ngOnInit() {
    this.service.getAllResources(this.currentPlanet.name).subscribe((data) => {
      console.log(data);
    });
  }

}
