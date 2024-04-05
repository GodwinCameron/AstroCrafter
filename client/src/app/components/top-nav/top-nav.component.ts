import { Component, OnInit, Input } from '@angular/core';
import { PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.sass',
})
export class TopNavComponent implements OnInit {

  @Input() currentPlanet: any;
  @Input() color: string = '';
  @Input() wallet: number = 0;  

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    if (!this.currentPlanet) {
      this.currentPlanet = this.planetService.getPlanet();
    }
  }
}
