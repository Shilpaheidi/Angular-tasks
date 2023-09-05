import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list1',
  templateUrl: './task-list1.component.html',
  styleUrls: ['./task-list1.component.scss']
})
export class TaskList1Component {

  addNewTask:string='';
tasks:string[] = [];


addTask(){
  if (this.addNewTask.trim() !== '') {
    this.tasks.push(this.addNewTask);
    this.addNewTask = '';
  }
}
}
