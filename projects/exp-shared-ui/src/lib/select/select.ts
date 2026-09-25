import { Component, Input, Output, EventEmitter, ElementRef, HostListener, ContentChild, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'exp-select',
  imports: [CommonModule, FormsModule],
  templateUrl: './select.html',
  styles: ``
})
export class ExpSelect implements OnChanges {
  @Input() options: any[] = [];
  @Input() bindLabel: string = 'label';
  @Input() bindValue: string = 'value';
  @Input() multiple: boolean = false;
  @Input() searchable: boolean = false;
  @Input() placeholder: string = 'Select...';
  @Input() disabled: boolean = false;
  
  @Input() value: any | any[] = null;
  @Output() valueChange = new EventEmitter<any>();

  @ContentChild(TemplateRef) customOptionTemplate!: TemplateRef<any>;

  isOpen = false;
  searchText = '';

  constructor(private elementRef: ElementRef) {}

  get filteredOptions() {
    if (!this.searchText) return this.options;
    const lowerSearch = this.searchText.toLowerCase();
    return this.options.filter(opt => {
      const label = this.getLabel(opt);
      return label && label.toLowerCase().includes(lowerSearch);
    });
  }

  getLabel(option: any): string {
    if (typeof option === 'string' || typeof option === 'number') return String(option);
    return option[this.bindLabel];
  }

  getValue(option: any): any {
    if (typeof option === 'string' || typeof option === 'number') return option;
    return option[this.bindValue];
  }

  get selectedLabels(): string {
    if (this.multiple) {
      if (!Array.isArray(this.value) || this.value.length === 0) return '';
      return this.value.map(val => {
        const opt = this.options.find(o => this.getValue(o) === val);
        return opt ? this.getLabel(opt) : val;
      }).join(', ');
    } else {
      if (this.value === null || this.value === undefined || this.value === '') return '';
      const opt = this.options.find(o => this.getValue(o) === this.value);
      return opt ? this.getLabel(opt) : this.value;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['multiple']) {
       if (this.multiple && !Array.isArray(this.value)) {
           this.value = this.value ? [this.value] : [];
       }
    }
  }

  toggleDropdown() {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.searchText = '';
    }
  }

  selectOption(option: any, event: Event) {
    event.stopPropagation();
    const val = this.getValue(option);
    
    if (this.multiple) {
      let currentValues = Array.isArray(this.value) ? [...this.value] : [];
      const index = currentValues.indexOf(val);
      if (index > -1) {
        currentValues.splice(index, 1);
      } else {
        currentValues.push(val);
      }
      this.value = currentValues;
      this.valueChange.emit(this.value);
    } else {
      this.value = val;
      this.valueChange.emit(this.value);
      this.isOpen = false;
      this.searchText = '';
    }
  }

  isSelected(option: any): boolean {
    const val = this.getValue(option);
    if (this.multiple) {
      return Array.isArray(this.value) && this.value.includes(val);
    }
    return this.value === val;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.searchText = '';
    }
  }
}
