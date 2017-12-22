import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Spicy Sausage Pasta",
      "Yummy pasta with smoked sausage and a little kick.",
      "http://www.kevinandamanda.com/whatsnew/wp-content/uploads/2012/04/spicy-sausage-pasta-16b.jpg",
      [
        new Ingredient('Smoked Sausage', 1),
        new Ingredient('Penne Pasta', 1),
        new Ingredient('Regular Rotel', 1)
      ]
    ),
    new Recipe("Not-So Spicy Sausage Pasta",
      "Yummy pasta with smoked sausage.",
      "http://www.kevinandamanda.com/whatsnew/wp-content/uploads/2012/04/spicy-sausage-pasta-16b.jpg",
      [
        new Ingredient('Smoked Sausage', 1),
        new Ingredient('Penne Pasta', 1),
        new Ingredient('Mild Rotel', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
