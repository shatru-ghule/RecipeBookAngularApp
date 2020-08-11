import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ShardeModule } from '../shared/sharde.module';

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesRoutingModule } from './recipes-routing.module';


@NgModule({
  declarations:[
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RecipeStartComponent,
    RecipeEditComponent

  ],
  imports:[
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    ShardeModule
  ],

})

export class RecipesModule{

}
