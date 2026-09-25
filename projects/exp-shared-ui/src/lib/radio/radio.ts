import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exp-radio',
  imports: [],
  templateUrl: './radio.html',
  styles: ``
})
export class ExpRadio {
  @Input() value: any;
  @Input() selectedValue: any;
  @Input() name: string = '';
  @Input() disabled: boolean = false;
  @Input() id: string = `exp-radio-${Math.random().toString(36).substring(2, 9)}`;

  @Output() selectedValueChange = new EventEmitter<any>();

  get checked(): boolean {
    return this.value === this.selectedValue;
  }

  onChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.checked) {
      this.selectedValueChange.emit(this.value);
    }
  }
}
