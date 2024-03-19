import { Component } from '@angular/core';
import { DiscoverBlockComponent } from '../../components/discover-block/discover-block.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiscoverBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  constructor(private router: Router) { }

  navigateToPlanet() {
    this.router.navigate(['/planet']);
  }

}
