import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculGlucidesComponent } from './calcul-glucides.component';

describe('CalculGlucidesComponent', () => {
  let component: CalculGlucidesComponent;
  let fixture: ComponentFixture<CalculGlucidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculGlucidesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculGlucidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
