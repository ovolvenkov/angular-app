import {Routes} from "@angular/router";
import {RecipesComponent} from "@components/recipes/recipes.component";
import {ShoppingListComponent} from "@components/shopping-list/shopping-list.component";
import {RecipeStartComponent} from "@components/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "@components/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "@components/recipe-edit/recipe-edit.component";

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
