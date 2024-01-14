import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  template: `
  <input #inputElementRef
         [value]="title"
         (keyup.enter)="changeTitle(getInputValue($event))">

  <button (click)="changeTitle(inputElementRef.value)">
    Save
  </button>
`,
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {
  title = 'Hello World';

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
  
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}