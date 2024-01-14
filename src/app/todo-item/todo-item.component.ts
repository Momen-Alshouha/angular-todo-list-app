import { OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-todo-item',
  standalone:true,
  template: `
   <div class="todo-item">
    {{ item.title }}
    <button class="btn btn-red remove-btn" (click)="removeItem()">
      Remove
    </button>
   </div>
  
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem | any;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  removeItem() {
    this.remove.emit(this.item);
  }

}
