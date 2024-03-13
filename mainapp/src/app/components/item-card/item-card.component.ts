import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.sass'
})
export class ItemCardComponent {
  @Input() data: any;
  @Input() key!: number;
  
  // get dataNameLength(): number {
  //   return this.data.name.length;
  //   console.log(this.data.name.length);
    
  // }

}
  

