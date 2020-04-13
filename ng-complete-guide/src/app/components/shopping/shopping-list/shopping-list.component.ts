import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../../model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('meat', 2),
    new Ingredient('salat', 3)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
