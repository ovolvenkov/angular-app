import {Routes} from "@angular/router";
import {RecipesComponent} from "../app/components/recipes/recipes.component";
import {ShoppingListComponent} from "../app/components/shopping-list/shopping-list.component";
import {RecipeStartComponent} from "../app/components/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "../app/components/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "../app/components/recipe-edit/recipe-edit.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},
    ] },
  { path: 'shopping-list', component: ShoppingListComponent },
]
