import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  standalone:true,
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem | any;

  constructor() { }

  ngOnInit(): void {
  }

}
