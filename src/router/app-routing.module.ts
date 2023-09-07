import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "../app/components/recipes/recipes.component";
import {ShoppingListComponent} from "../app/components/shopping-list/shopping-list.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
