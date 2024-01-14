import { OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  template: `
   <div class="todo-item">
   <label class="label-container">
  <input type="checkbox"
         class="todo-checkbox checkbox"
         (click)="completeItem()"
         [checked]="item.completed"/>
         <span class="checkmark"></span>
   </label>
    <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
      {{ item.title }}
    </span>

    <button class="btn btn-red remove-btn red-gradient-button" (click)="removeItem()">
    <span></span>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
   </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem | any;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
