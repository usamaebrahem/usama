import { Component, OnInit } from '@angular/core';
import {Task} from './Task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],

})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  i: number;
  ngOnInit() {

  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(  t => t !== task);
  }

  addNewTask(n: string, c: string, p: string) {
    this.tasks.push(new Task(n , c , p));
  }
calculate(t: Task) {
    this.i = 0;
    for (let j = 0; j < this.tasks.length; j += 1) {
      this.i += t[j].p * t[j].c;
    }
  return  this.i;
  }
}
