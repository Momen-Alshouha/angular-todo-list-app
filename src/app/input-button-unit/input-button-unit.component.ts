import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  template: `
    <input class="todo-input" #inputElementRef
          placeholder="Enter New Task.."
          (keyup.enter)="submitValue(inputElementRef.value)">
    <button class="gradient-button button" (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submitValue(newTitle: string): void {
    
    if(newTitle.trim()) {
      this.submit.emit(newTitle);    
    }
  }
}
