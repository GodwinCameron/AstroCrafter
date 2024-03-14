import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inventory-crafting',
  standalone: true,
  imports: [],
  templateUrl: './inventory-crafting.component.html',
  styleUrl: './inventory-crafting.component.sass',
})
export class InventoryCraftingComponent {
  @ViewChild('ingredientsElement', { static: false })
  ingredientsElement!: ElementRef;
  @ViewChild('yeildElement', { static: false }) yeildElement!: ElementRef;
  @ViewChild('craftButtonElement', { static: false }) craftButtonElement!: ElementRef;

  ngAfterViewInit() {
    if (this.ingredientsElement) {
      this.ingredientsElement.nativeElement.style.height = '10px';
    }
  }

  handleClick() {
    if (this.ingredientsElement) {
      this.ingredientsElement.nativeElement.style.height = '10px';
      this.yeildElement.nativeElement.style.height = '10px';
      setTimeout(() => {
        this.ingredientsElement.nativeElement.style.height = '41.5vh';
        this.craftButtonElement.nativeElement.style.marginTop = '41.5vh'
      }, 400);
      setTimeout(() => {
        this.yeildElement.nativeElement.style.height = '41.5vh';
      }, 600);
    }
  }

}
