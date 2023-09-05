import {NgModule} from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  exports:[
    MatInputModule,
    MatButtonModule,
    MatMenuModule
  ]
})

export class MaterialModule {}
