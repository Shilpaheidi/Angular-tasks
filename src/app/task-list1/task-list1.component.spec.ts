import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskList1Component } from './task-list1.component';

describe('TaskList1Component', () => {
  let component: TaskList1Component;
  let fixture: ComponentFixture<TaskList1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskList1Component]
    });
    fixture = TestBed.createComponent(TaskList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
