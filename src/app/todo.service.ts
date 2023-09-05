import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks: any[] = [];

  addTask(taskName: string) {
    this.tasks.push({ name: taskName, completed: false });
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  markCompleted(task: any) {
    task.completed = true;
  }

  getTask(){
    return this.tasks;
  }
  constructor() {}
}
