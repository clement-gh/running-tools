import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlluresComponent } from './allures.component';

describe('AlluresComponent', () => {
  let component: AlluresComponent;
  let fixture: ComponentFixture<AlluresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlluresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlluresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
