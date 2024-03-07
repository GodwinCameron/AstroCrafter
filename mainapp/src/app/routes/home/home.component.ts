import { Component } from '@angular/core';
import { DiscoverBlockComponent } from '../../components/discover-block/discover-block.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiscoverBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
