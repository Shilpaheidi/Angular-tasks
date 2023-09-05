import { Component } from '@angular/core';

@Component({
  selector: 'app-new-todo-list',
  templateUrl: './new-todo-list.component.html',
  styleUrls: ['./new-todo-list.component.scss'],
})
export class NewTodoListComponent {
  taskTitle!: string;
  taskDescription!: string;
  tasks: Task[] = [];
  selectedTask!: any;

  addTask() {
    if (this.taskTitle && this.taskDescription) {
      const newTask: Task = {
        id: Date.now(),
        title: this.taskTitle,
        description:this.taskDescription,
        completed:false
      };

      this.tasks.push(newTask);
      this.taskTitle = '';
      this.taskDescription = '';
    }
  }


  editTask(task:Task){
    this.selectedTask = {...task};
  }

  updateTask(){
    if (this.selectedTask) {

      const index = this.tasks.findIndex((task) => task.id === this.selectedTask.id);

      if (index !== -1) {
        this.tasks[index] = {... this.selectedTask};
        this.selectedTask = null;
      }else{
        this.tasks.push(this.selectedTask);
      }
      
    }
  }

  deleteTask(task:Task){
      const index = this.tasks.indexOf(task);

      if (index != -1) {
        this.tasks.splice(index,1);
      }
  }
}
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
