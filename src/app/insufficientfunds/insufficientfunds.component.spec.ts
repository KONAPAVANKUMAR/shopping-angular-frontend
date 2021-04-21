import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsufficientfundsComponent } from './insufficientfunds.component';

describe('InsufficientfundsComponent', () => {
  let component: InsufficientfundsComponent;
  let fixture: ComponentFixture<InsufficientfundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsufficientfundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsufficientfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
