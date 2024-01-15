import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

const todoListStorageKey = 'Todo_List';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {

  private todoListSubject = new BehaviorSubject<TodoItem[]>([]);

  todoList = this.todoListSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.loadTodoListFromStorage();
  }

  public loadTodoListFromStorage() {
    try {
      const storedTodoList = this.storageService.getData(todoListStorageKey);
      
      const initialTodoList = storedTodoList ?? [];
      
      this.todoListSubject.next([...initialTodoList]);
    } catch (error) {
      console.error('Error loading Todo list:', error);
    }
  }

  private saveList(todoList: TodoItem[]) {
    try {
      this.storageService.setData(todoListStorageKey, todoList);
      this.todoListSubject.next([...todoList]);
    } catch (error) {
      console.error('Error saving Todo list:', error);
      throw error;
    }
  }

   addItem(item: TodoItem) {
    const currentTodoList = this.todoListSubject.value;
    const updatedTodoList = [...currentTodoList, item];
     this.saveList(updatedTodoList);
  }

   updateItem(item: TodoItem, changes: Partial<TodoItem>) {
    const currentTodoList = this.todoListSubject.value;
    const index = currentTodoList.findIndex((i) => i === item);

    if (index !== -1) {
      const updatedTodoList = [...currentTodoList];
      updatedTodoList[index] = { ...item, ...changes };
       this.saveList(updatedTodoList);
    }
  }

   deleteItem(item: TodoItem) {
    const currentTodoList = this.todoListSubject.value;
    const index = currentTodoList.indexOf(item);

    if (index !== -1) {
      const updatedTodoList = [...currentTodoList];
      updatedTodoList.splice(index, 1);
       this.saveList(updatedTodoList);
    }
  }

  getTodoList(): TodoItem[] {
    return this.todoListSubject.value;
  }
}
