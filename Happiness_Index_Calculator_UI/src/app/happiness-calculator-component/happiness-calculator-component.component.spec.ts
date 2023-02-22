import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessCalculatorComponentComponent } from './happiness-calculator-component.component';

describe('HappinessCalculatorComponentComponent', () => {
  let component: HappinessCalculatorComponentComponent;
  let fixture: ComponentFixture<HappinessCalculatorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessCalculatorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappinessCalculatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
