import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-completed-crafting',
  standalone: true,
  imports: [],
  templateUrl: './completed-crafting.component.html',
  styleUrl: './completed-crafting.component.sass'
})
export class CompletedCraftingComponent {

  @Input() crafted: any;

}
