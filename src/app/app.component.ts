import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,InputButtonUnitComponent],
  template: `
  <h1>
  Welcome to {{ title }}!
</h1>

<app-input-button-unit></app-input-button-unit>

<ul>
  <li *ngFor="let todoItem of todoList; track: title">
    {{ todoItem.title }}
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