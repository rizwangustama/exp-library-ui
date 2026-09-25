import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exp-checkbox',
  imports: [],
  templateUrl: './checkbox.html',
  styles: ``
})
export class ExpCheckbox {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() id: string = `exp-checkbox-${Math.random().toString(36).substring(2, 9)}`;

  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.checked = inputElement.checked;
    this.checkedChange.emit(this.checked);
  }
}
