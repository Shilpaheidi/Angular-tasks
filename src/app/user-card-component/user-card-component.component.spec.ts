import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponentComponent } from './user-card-component.component';

describe('UserCardComponentComponent', () => {
  let component: UserCardComponentComponent;
  let fixture: ComponentFixture<UserCardComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardComponentComponent]
    });
    fixture = TestBed.createComponent(UserCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
