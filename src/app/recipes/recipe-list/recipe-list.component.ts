import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<object>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test1', 'https://www.maxpixel.net/static/photo/1x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'https://www.maxpixel.net/static/photo/1x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: object){
    this.recipeSelected.emit(recipe);
  }
}
