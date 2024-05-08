import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestRecipeComponent } from './latest-recipe.component';

describe('LatestRecipeComponent', () => {
  let component: LatestRecipeComponent;
  let fixture: ComponentFixture<LatestRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
