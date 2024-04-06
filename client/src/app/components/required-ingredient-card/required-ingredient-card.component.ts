import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-required-ingredient-card',
  standalone: true,
  imports: [],
  templateUrl: './required-ingredient-card.component.html',
  styleUrl: './required-ingredient-card.component.sass'
})
export class RequiredIngredientCardComponent {

  @Input() selctedRecipe: any;

}
