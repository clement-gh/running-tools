import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCalculGelsComponent } from './formulaire-calcul-gels.component';

describe('FormulaireCalculGelsComponent', () => {
  let component: FormulaireCalculGelsComponent;
  let fixture: ComponentFixture<FormulaireCalculGelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireCalculGelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireCalculGelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
