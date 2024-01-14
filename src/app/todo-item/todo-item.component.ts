import { OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass, NgIf,FormsModule],
  templateUrl: './todo-item.component.html',
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


  startEditing(): void {
    this.item.editable = true;
  }

  completeEditing(): void {
    this.item.editable = false;
    this.update.emit({
      item: this.item,
      changes: { title: this.item.title },
    });
  }


}
