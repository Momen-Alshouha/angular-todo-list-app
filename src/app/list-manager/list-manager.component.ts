import { Component } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TodoListService } from '../services/todo-list.service';

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

    <app-todo-item
    [item]="todoItem"
    (remove)="removeItem($event)"
    (update)="updateItem($event.item, $event.changes)"
    ></app-todo-item>


    </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent {

  title = "To Do List";
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }

  removeItem(item: any): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item: TodoItem, changes: any): void {
    this.todoListService.updateItem(item, changes);
  }


  trackByFn(index: number, item: TodoItem): number {
    return index;
  }


}
