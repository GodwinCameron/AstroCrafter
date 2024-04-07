import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { PlanetService } from '../../services/planet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.sass',
})
export class ItemCardComponent {
  @Input() data: any;
  @Input() index!: number;
  @Input() currentPlanet: any = '';
  @Output() dataChanged = new EventEmitter<any>();
  planets: any;
  selectedPlanet: string = ''; 

  constructor(private resourceService: ResourceService, private planetService: PlanetService) {}

  handleDiscard() {
    this.resourceService.discardItem(
      this.currentPlanet.name,
      this.data[this.index].resource.name,
      this.data[this.index].resource.id
    );
    setTimeout(() => {
      this.dataChanged.emit();
    }, 100);
  }

  handleTransfer(event: Event) {
    event.stopPropagation();
    const transfer = document.getElementById(`transfer${this.index}`);
    const form = document.getElementById(`form${this.index}`);
    const sell = document.getElementById(`sell${this.index}`);
    const discard = document.getElementById(`discard${this.index}`);
    const cancel = document.getElementById(`cancel${this.index}`);
    if (transfer) {
      transfer.setAttribute('style', 'height: 8vh; width: 15vw');
      const p = transfer.querySelector('p');
      if (p) {
        p.setAttribute('style', 'display: none');
      }
    }
    if (form) {
      form.setAttribute('style', 'display: flex');
    }
    if (sell) {
      sell.setAttribute('style', 'display: none');
    }
    if (discard) {
      discard.setAttribute('style', 'display: none');
    }
    if (cancel) {
      cancel.setAttribute('style', 'display: flex');
    }
    // get planets and set them to the planets variable
    this.planetService.getAllPlanets().subscribe((data) => {
      this.planets = data;
    });
  }

  transferItems(event: Event) {
    event.preventDefault();
    // // get the form data
    // const form = document.getElementById(`form${this.index}`) as HTMLFormElement | null;
    // if (form) {
    //   const formData = new FormData(form);
    //   const planet = formData.get('planet');
    //   // log the data
    //   console.log(planet, this.data[this.index].resource.name, this.data[this.index].resource.id);
    // }
    console.log('transfer items');
  }
  

  handleCancel() {
    const transfer = document.getElementById(`transfer${this.index}`);
    const form = document.getElementById(`form${this.index}`);
    const sell = document.getElementById(`sell${this.index}`);
    const discard = document.getElementById(`discard${this.index}`);
    const cancel = document.getElementById(`cancel${this.index}`);
    if (transfer) {
      transfer.setAttribute('style', 'height: 100%; width: auto');
      const p = transfer.querySelector('p');
      if (p) {
        p.setAttribute('style', 'display: flex');
      }
    }
    if (form) {
      form.setAttribute('style', 'display: none');
    }
    if (sell) {
      sell.setAttribute('style', 'display: flex');
    }
    if (discard) {
      discard.setAttribute('style', 'display: flex');
    }
    if (cancel) {
      cancel.setAttribute('style', 'display: none');
    }
  }

  
}
