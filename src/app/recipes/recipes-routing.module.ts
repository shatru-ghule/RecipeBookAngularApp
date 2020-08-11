import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AuthGuard } from '../auth/auth.guard';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeResloverService } from './recipe-resolver.service';



const routes:Routes=[
  {
    path: "",
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      {
        path: ":id",
        component: RecipesDetailComponent,
        resolve: [RecipeResloverService],
      },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        resolve: [RecipeResloverService],
      },
    ],
  }

]
@NgModule({

  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class RecipesRoutingModule{

}
