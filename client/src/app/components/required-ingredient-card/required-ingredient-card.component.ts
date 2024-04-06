import { Component, Input } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    console.log(this.selectedRecipe);
    let number = this.ingredientNumber;
    let id = this.selectedRecipe['ingredient_' + number].id;
    let ingredient = this.inventory.find((item: any) => item.id === id);
    this.requiredItemAmount = ingredient.quantity;
  }
}
