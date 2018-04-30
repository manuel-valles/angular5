import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientNameInput') nameInputRef: ElementRef;
  @ViewChild('ingredientAmountInput') amountInputRef: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount); 
    this.shoppingService.addIngredient(newIngredient);
  }
}
