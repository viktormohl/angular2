import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('Hamburger', 'The best Hamburger EVER!', 'https://www.daskochrezept.de/sites/default/files/rezepte/Hamburger-Hausgemacht-burger1200.jpg'),
    new Recipe('Cheeburger', 'McDonald\'s Israel - Wikipedia', 'https://upload.wikimedia.org/wikipedia/commons/8/86/Big_America_McDonalds_Israel.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
