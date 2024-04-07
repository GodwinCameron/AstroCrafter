import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { RequiredIngredientCardComponent } from '../required-ingredient-card/required-ingredient-card.component';
import { ResourceService } from '../../services/resource.service';
import { CompletedCraftingComponent } from '../completed-crafting/completed-crafting.component';

@Component({
  selector: 'app-inventory-crafting',
  standalone: true,
  imports: [CommonModule, RequiredIngredientCardComponent, CompletedCraftingComponent ],
  templateUrl: './inventory-crafting.component.html',
  styleUrl: './inventory-crafting.component.sass',
})
export class InventoryCraftingComponent {
  @ViewChild('ingredientsElement', { static: false })
  ingredientsElement!: ElementRef;
  @ViewChild('yeildElement', { static: false }) yeildElement!: ElementRef;
  @ViewChild('craftButtonElement', { static: false })
  craftButtonElement!: ElementRef;

  recipes: any;
  index: number = 0;
  @Input() selectedRecipe: any;
  @Input() ingredientNumber: number = 0;
  @Input() currentPlanet: any;
  @Input() wallet: number = 0;
  @Input() inventory: any;
  @Input() ingredientsMet: Array<boolean> = [false, false, false];
  @Input() finishedCrafting: boolean = false;
  @Input() crafted: any;

  constructor(
    private service: RecipeService,
    private resourceService: ResourceService
  ) {}

  ngOnInit() {
    // use service to get all recipes
    this.service.getAllRecipes().subscribe((data) => {
      console.log(data);
      this.recipes = data;
    });

    this.resourceService
      .getAllResources(this.currentPlanet.name)
      .subscribe((data) => {
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
    this.selectedRecipe = this.recipes[index];
    if (this.ingredientsElement) {
      this.ingredientsElement.nativeElement.style.height = '10px';
      this.yeildElement.nativeElement.style.height = '10px';
      setTimeout(() => {
        this.ingredientsElement.nativeElement.style.height = '41.5vh';
        this.craftButtonElement.nativeElement.style.marginTop = '41.5vh';
      }, 400);
      setTimeout(() => {
        this.yeildElement.nativeElement.style.height = '41.5vh';
      }, 600);
    }

    console.log(this.isCraftable());
  }



  

  // Sorry, This is a very ineffcient way to do this, I've done similar functionality somewhere else in this project without using this apporach
  // I just really wanted to try this with an unnecessary usage of ifstatements to see if it would work
  // I won't do this again, it isn't good to do it, but it was really fun to try
  isCraftable() {
    if (!this.selectedRecipe) {
      return false;
    }

    if (this.ingredientsMet[0] === true) {
      return true;
    }

    if (
      this.selectedRecipe.ingredient_2_quantity === 0 ||
      this.selectedRecipe.ingredient_2_quantity === null ||
      this.selectedRecipe.ingredient_2_quantity === undefined
    ) {
      if (
        this.ingredientsMet[0] === false &&
        this.ingredientsMet[1] === true &&
        this.ingredientsMet[2] === false
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (
        this.ingredientsMet[0] === false &&
        this.ingredientsMet[1] === true &&
        this.ingredientsMet[2] === true
      ) {
        return true;
      } else {
        return false;
      }
    }
  }


  handleCraft() {
    var recipe = this.selectedRecipe;
    var ingredient1 = {item: this.selectedRecipe.ingredient_1, amount: this.selectedRecipe.ingredient_1_quantity};
    var ingredient2 = {item: this.selectedRecipe.ingredient_2, amount: this.selectedRecipe.ingredient_2_quantity};

    console.log('Crafting:', recipe, " using:", ingredient1, ingredient2);

    this.resourceService.craftItem(this.currentPlanet.name, recipe, ingredient1, ingredient2);
    this.finishedCrafting = true;
    this.crafted = recipe;
  }
    

}
