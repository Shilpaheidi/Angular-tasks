import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.scss']
})
export class TaskListComponentComponent {

  newTask:string = ' ';
  tasks: any[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
}

deleteTask(index:number){
  this.tasks.splice(index,1);
}


// addTask() {
//   if (this.newTask.length > 0) {
//     this.tasks.push(this.newTask.trim());
//     this.newTask = '';
//   }
// }

// addTask() {
//   if (this.newTask.trim() !== '' && this.newTask.trim() !== ' ') {
//     this.tasks.push(this.newTask.trim());
//     this.newTask = '';
//   }
// }

}