import { Component, Input } from '@angular/core';
import { DiscoverBlockComponent } from '../../components/discover-block/discover-block.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiscoverBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToPlanet() {
    this.router.navigate(['/planet']);
  }

  @Input() color: string = '#00ADEB';
  @Input() title1: string = 'What is AstroCrafter?';
  @Input() title2: string = 'Check out Astroneer on Steam!';
  @Input() title3: string = 'AstroCrafter GitHub';
  @Input() title4: string = 'Get started!';

  @Input() subtitle1: string =
    'AstroCrafter is an inventory and crafting management system that uses a combination of combining and moving materials between planets';
  @Input() subtitle2: string = "Visit the Astroneer store page on Steam!";
  @Input() subtitle3: string = "Check out the AstroCrafter GitHub repository!";
  @Input() subtitle4: string = "Get started! Click here to begin your journey!";

  @Input() image1: string = "1";
  @Input() image2: string = "2";
  @Input() image3: string = "3";
  @Input() image4: string = "4";
}
