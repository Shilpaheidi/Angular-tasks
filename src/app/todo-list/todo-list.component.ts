import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  // todoList:any[] = [ { description: 'Buy groceries', completed: false },
  // { description: 'Do laundry', completed: true },
  // { description: 'Clean the house', completed: false }]



  constructor(private todoservice: TodoService) {}

  newTask: string = '';
  tasks: any[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
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
}
