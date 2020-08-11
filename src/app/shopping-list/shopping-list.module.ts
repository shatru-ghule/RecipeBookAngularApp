import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';
import { ShardeModule } from '../shared/sharde.module';

@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingEditComponent,

  ],
  imports:[
    FormsModule,
    RouterModule.forChild([
      { path: "", component: ShoppingListComponent },
    ]),
    ShardeModule
  ]
})
export class ShoppingListModule {

}
