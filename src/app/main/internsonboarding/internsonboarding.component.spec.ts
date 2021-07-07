import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternsonboardingComponent } from './internsonboarding.component';

describe('InternsonboardingComponent', () => {
  let component: InternsonboardingComponent;
  let fixture: ComponentFixture<InternsonboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternsonboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternsonboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
