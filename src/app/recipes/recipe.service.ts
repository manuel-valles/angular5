import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe [] = [
    new Recipe('A Test Recipe1', 'This is simply a test1', 'https://www.maxpixel.net/static/photo/1x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'https://www.maxpixel.net/static/photo/1x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
