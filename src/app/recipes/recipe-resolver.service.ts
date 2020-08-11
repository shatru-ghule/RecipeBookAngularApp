import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipes.service";

@Injectable({
  providedIn: "root",
})
export class RecipeResloverService implements Resolve<Recipe[]> {
  constructor(
    private sotrageDataService: DataStorageService,
    private recipesService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();
    if (recipes.length === 0) {
      return this.sotrageDataService.FetchRecipe();
    } else {
      return recipes;
    }
  }
}
