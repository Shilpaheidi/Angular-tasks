import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCountDownTimerComponent } from './app-count-down-timer.component';

describe('AppCountDownTimerComponent', () => {
  let component: AppCountDownTimerComponent;
  let fixture: ComponentFixture<AppCountDownTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCountDownTimerComponent]
    });
    fixture = TestBed.createComponent(AppCountDownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
