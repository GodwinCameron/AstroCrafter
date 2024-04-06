import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { RequiredIngredientCardComponent } from '../required-ingredient-card/required-ingredient-card.component';
import { ResourceService } from '../../services/resource.service';

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
  @Input() selectedRecipe: any;
  @Input() ingredientNumber: number = 0;
  @Input() currentPlanet: any;
  @Input() wallet: number = 0;
  @Input() inventory: any;

  

  constructor(private service: RecipeService, private resourceService: ResourceService) {}

  ngOnInit() {
    // use service to get all recipes
    this.service.getAllRecipes().subscribe((data) => {
      console.log(data);
      this.recipes = data;
    });

    this.resourceService.getAllResources(this.currentPlanet.name).subscribe((data) => {
      this.inventory = data;
      console.log(this.inventory);
    });

  }

  ngAfterViewInit() {
    if (this.ingredientsElement) {
      this.ingredientsElement.nativeElement.style.height = '10px';
    }
  }

  handleClick(index: number) {

    console.log(this.recipes[index]);
    this.selectedRecipe = this.recipes[index];
    

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






