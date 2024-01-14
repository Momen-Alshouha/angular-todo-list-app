import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone:true,
  template: `
    <input class="todo-input" #inputElementRef
           [value]="title"
           (keyup.enter)="submitValue(inputElementRef.value)">
    <button class="button" (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {  
  }

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
