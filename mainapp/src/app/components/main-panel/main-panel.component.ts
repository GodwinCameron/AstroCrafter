import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { InventoryItemComponent } from '../inventory-item/inventory-item.component';
import { InventoryCraftingComponent } from '../inventory-crafting/inventory-crafting.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [InventoryItemComponent, InventoryCraftingComponent, CommonModule],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.sass',
})
export class MainPanelComponent implements AfterViewInit {
  @ViewChild('contentElement', { static: false }) contentElement!: ElementRef;
  @ViewChild('itemCardElement', { static: false }) itemCardElement!: ElementRef;
  navItemsClicked: boolean[] = [false, false]; // Keep track of clicked state for each nav item

  ngAfterViewInit() {
    if (this.contentElement) {
      this.contentElement.nativeElement.style.height = '60vh';
    }
  }

  toggleNavItem(index: number) {
    if (this.contentElement) {
      this.contentElement.nativeElement.style.height = '0px';
      this.itemCardElement.nativeElement.style.display = 'none';
      setTimeout(() => {
        this.contentElement.nativeElement.style.height = '60vh';
        this.itemCardElement.nativeElement.style.display = 'flex';
      }, 800);
    }
    // Reset the state of all nav items
    this.navItemsClicked = this.navItemsClicked.map(() => false);

    // Toggle the clicked state for the current nav item
    this.navItemsClicked[index] = true;
  }
}
