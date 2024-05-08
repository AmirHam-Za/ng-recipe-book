import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestRecipeComponent } from './components/latest-recipe/latest-recipe.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CategoryPageComponent,
    SinglePageComponent,
    NavComponent,
    FooterComponent,
    LatestRecipeComponent,
    RecipeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
