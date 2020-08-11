import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShardeModule } from '../shared/sharde.module';

@NgModule({
  declarations:[
    AuthComponent
  ],
  imports:[
   FormsModule,
   RouterModule.forChild([
    {
      path: "",
      component: AuthComponent,
    }
   ]),
   ShardeModule
  ]
})

export class AuthModule {

}
