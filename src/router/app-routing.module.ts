import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./router";

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
