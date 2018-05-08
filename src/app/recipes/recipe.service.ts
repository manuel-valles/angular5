import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  
  private recipes: Recipe [] = [
    new Recipe(
      'A Test Recipe1', 
      'This is simply a test1',
      'https://www.maxpixel.net/static/photo/1x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 20)
      ]
    ),
    new Recipe(
      'A Test Recipe2', 
      'This is simply a test2',
      'https://www.maxpixel.net/static/photo/1x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Cheese', 1)
      ]
    )
  ];

  constructor(private shoppingService: ShoppingService){}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes);
  }
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
