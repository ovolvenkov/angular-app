import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../models/ingredient";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Mango', 7),
    new Ingredient('Bananas', 9),
  ];

  constructor() { }

  ngOnInit() {
  }

}
