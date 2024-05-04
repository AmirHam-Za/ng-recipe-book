import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { SinglePageComponent } from './components/single-page/single-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'category', component: CategoryPageComponent },
  { path: 'single', component: SinglePageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
