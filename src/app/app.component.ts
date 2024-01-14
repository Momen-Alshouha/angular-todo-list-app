import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListManagerComponent } from './list-manager/list-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ListManagerComponent],
  template: `
  <h1>
    Welcome to {{ title }}!
  </h1>

  <app-list-manager></app-list-manager>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My To-Do List App';
}
