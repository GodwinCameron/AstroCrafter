import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { RequiredIngredientCardComponent } from '../required-ingredient-card/required-ingredient-card.component';

@Component({
  selector: 'app-inventory-crafting',
  standalone: true,
  imports: [ CommonModule, RequiredIngredientCardComponent ],
  templateUrl: './inventory-crafting.component.html',
  styleUrl: './inventory-crafting.component.sass',
})
export class InventoryCraftingComponent {
  @ViewChild('ingredientsElement', { static: false })
  ingredientsElement!: ElementRef;
  @ViewChild('yeildElement', { static: false }) yeildElement!: ElementRef;
  @ViewChild('craftButtonElement', { static: false }) craftButtonElement!: ElementRef;

  recipes: any;
  index: number = 0;
  @Input() selctedRecipe: any;

  

  constructor(private service: RecipeService) {}

  ngOnInit() {
    // use service to get all recipes
    this.service.getAllRecipes().subscribe((data) => {
      console.log(data);
      this.recipes = data;
    });
  }

  ngAfterViewInit() {
    if (this.ingredientsElement) {
      this.ingredientsElement.nativeElement.style.height = '10px';
    }
  }

  handleClick(index: number) {

    console.log(this.recipes[index]);
    this.selctedRecipe = this.recipes[index];
    

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






