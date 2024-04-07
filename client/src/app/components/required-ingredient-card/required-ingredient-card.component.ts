import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-required-ingredient-card',
  standalone: true,
  imports: [],
  templateUrl: './required-ingredient-card.component.html',
  styleUrl: './required-ingredient-card.component.sass',
})
export class RequiredIngredientCardComponent {
  @Input() selectedRecipe: any;
  @Input() ingredientNumber: number = 0;
  @Input() inventory: any;
  @Input() requiredItemAmount: number = 0;
  @Input() ingredientsMet: Array<boolean> = [false, false, false];

  constructor() {}

  ngOnInit(): void {
    let number = this.ingredientNumber;
    let id = this.selectedRecipe['ingredient_' + number].id;
    let ingredient = this.inventory.find((item: any) => item.id === id);
    this.requiredItemAmount = ingredient.quantity;
  }
  ngOnChanges(): void {
    let number = this.ingredientNumber;
    let id = this.selectedRecipe['ingredient_' + number].id;
    let ingredient = this.inventory.find((item: any) => item.id === id);
    this.requiredItemAmount = ingredient.quantity;
    if (
      ingredient.quantity >=
      this.selectedRecipe['ingredient_' + this.ingredientNumber + '_quantity']
    ) {
      this.ingredientsMet[number] = true;
      console.log(this.ingredientsMet);
    }
  }
}
