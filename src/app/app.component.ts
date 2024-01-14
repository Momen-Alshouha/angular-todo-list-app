import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[TodoItemComponent,InputButtonUnitComponent,NgFor,CommonModule],
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>

    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
    <li *ngFor="let todoItem of todoList; let i = index; trackBy: trackByFn">
    <app-todo-item [item]="todoItem"></app-todo-item>
    </li>

    </ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'create new app'},
  ];

  addItem(title: string): void {
    console.log(title);
    this.todoList.push({ title });
  }

  trackByFn(index: number, item: TodoItem): number {
    return index;
  }
  

}
