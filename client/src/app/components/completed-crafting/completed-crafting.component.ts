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


  constructor() { }

  // on init get waller from local storage and add 750
  ngOnInit() {
    var temp: any = localStorage.getItem('wallet');
    temp = JSON.parse(temp);
    temp += 750;
    localStorage.setItem('wallet', JSON.stringify(temp));
  }



}
