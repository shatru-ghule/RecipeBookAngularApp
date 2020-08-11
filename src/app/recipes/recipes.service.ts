import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipeChenged = new Subject<Recipe[]>();
  //  private recipes:Recipe[]=[
  //     new Recipe('A Pizza Recipe',
  //      'What else you Need to Say?',
  //      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_1280,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
  //      [
  //        new Ingredient('chesses',2),
  //        new Ingredient('Tommato sauce',3)

  //      ]),
  //     new Recipe('Big Fat Burger',
  //      'This is simply a Test',
  //      'https://media1.s-nbcnews.com/j/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.fit-2000w.jpg',
  //      [
  //        new Ingredient('Buns',2),
  //        new Ingredient('Meat',1)
  //      ])
  //   ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChenged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChenged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChenged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChenged.next(this.recipes.slice());
  }
}
