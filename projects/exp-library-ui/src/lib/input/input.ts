import { Component, Input, Output, EventEmitter } from '@angular/core';

export type InputType = 'text' | 'email' | 'password' | 'number';

@Component({
  selector: 'exp-input',
  imports: [],
  templateUrl: './input.html',
  styles: ``
})
export class ExpInput {
  @Input() type: InputType = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() id: string = '';
  
  // Posisi ikon: 'left' atau 'right'
  @Input() iconPosition: 'left' | 'right' = 'left';

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.valueChange.emit(this.value);
  }
}
