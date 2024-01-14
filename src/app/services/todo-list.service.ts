import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'deploy app'},
  ];
  
  constructor() { }

  getTodoList() : TodoItem[] {
    return this.todoList;
  }

  addItem(title : string) : void {
    this.todoList.push({title});
  }

}
