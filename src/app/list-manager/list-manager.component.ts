import { Component } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [TodoItemComponent, InputButtonUnitComponent, NgFor, CommonModule],
  template: `
    <h2 class="app-title">
      {{ title }}
    </h2>
    <div class="todo-app">
     <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList; let i = index; trackBy: trackByFn">
      <app-todo-item [item]="todoItem"></app-todo-item>
    </li>

    </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent {
  title = 'Todo List';
  todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'create new app' },
  ];

  addItem(title: string): void {
    //console.log(title);
    this.todoList.push({ title });
  }

  trackByFn(index: number, item: TodoItem): number {
    
    console.log(item.title)
    return index;
  }


}
