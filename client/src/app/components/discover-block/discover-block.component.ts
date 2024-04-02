import { Component, Input } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-discover-block',
  standalone: true,
  imports: [],
  templateUrl: './discover-block.component.html',
  styleUrl: './discover-block.component.sass'
})
export class DiscoverBlockComponent {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() image: string = '';


  // constructor(private router: Router) { }

  // navigateToPlanet() {
  //   this.router.navigate(['/planet']);
  // }

}
