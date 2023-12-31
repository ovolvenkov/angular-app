import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '@components/header/header.component';
import { RecipesComponent } from '@components/recipes/recipes.component';
import { RecipeListComponent } from '@components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '@components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '@components/recipe-item/recipe-item.component';
import { ShoppingListComponent } from '@components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '@components/shopping-edit/shopping-edit.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownDirective} from "./directives/dropdown.directive";
import {ShoppingListService} from "@services/shopping-list.service";
import {AppRoutingModule} from "../router/app-routing.module";
import { RecipeStartComponent } from '@components/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '@components/recipe-edit/recipe-edit.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSnackBarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
