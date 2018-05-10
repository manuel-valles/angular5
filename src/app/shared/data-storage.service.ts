import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, 
    private recipeService: RecipeService,
    private authService: AuthService){}

  storeRecipes(){
    const token = this.authService.getToken()

    return this.httpClient.put('https://angular-recipe-book-9efa5.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      observe: 'body',
      params: new HttpParams().set('auth', token)
    });
  }

  getRecipes(){
    const token = this.authService.getToken()
      
    this.httpClient.get<Recipe[]>('https://angular-recipe-book-9efa5.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json',
      params: new HttpParams().set('auth', token)
    })
      .map(
        (recipes) => {
          for(let recipe of recipes){
            if(!recipe['ingredients']){
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      )
  }
}
