import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';



@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList: TodoItem[];

  constructor(private storageService: StorageService) {

    const storedToDoList =storageService.getData(todoListStorageKey);
    this.todoList = storedToDoList!==null && storedToDoList !== undefined ? storedToDoList : [];

  }

  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
}

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item : any, changes : any) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item : any) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

}
