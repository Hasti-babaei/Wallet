import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMoneyComponent } from './check-money.component';

describe('CheckMoneyComponent', () => {
  let component: CheckMoneyComponent;
  let fixture: ComponentFixture<CheckMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckMoneyComponent]
    });
    fixture = TestBed.createComponent(CheckMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
