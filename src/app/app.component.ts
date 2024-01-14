import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,InputButtonUnitComponent,TodoItemComponent],
  template: `
  <h1>
  Welcome to {{ title }}!
</h1>

<app-input-button-unit></app-input-button-unit>

<ul>
  <li *ngFor="let todoItem of todoList; track: title">
   <app-todo-item [item]="todoItem"></app-todo-item>
  </li>
</ul>

`, 
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'todo-list';
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}