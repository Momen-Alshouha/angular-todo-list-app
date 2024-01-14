import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: `
    {{ item.title }}
  `,
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() item: TodoItem | any;
}
