import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from '../components/recipe-detail/recipe-detail.component';


const routes: Routes = [{ path: '', component: RecipeDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeDetailsRoutingModule { }
