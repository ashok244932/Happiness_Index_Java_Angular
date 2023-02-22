import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyInputComponentComponent } from './survey-input-component.component';

describe('SurveyInputComponentComponent', () => {
  let component: SurveyInputComponentComponent;
  let fixture: ComponentFixture<SurveyInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyInputComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
