import { Component, Input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  imports: [],
  selector: 'exp-button',
  styles: ``,
  templateUrl: './button.html',
})
export class ExpButton {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;

  // Backwards compatibility
  @Input() set expDisabled(val: boolean) {
    this.disabled = val;
  }

  get baseClasses(): string {
    return 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';
  }

  get variantClasses(): string {
    switch (this.variant) {
      case 'primary':
        return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-transparent';
      case 'secondary':
        return 'bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500 border border-gray-300';
      case 'danger':
        return 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 border border-transparent';
      case 'ghost':
        return 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-500 border border-transparent';
      default:
        return 'bg-blue-600 text-white hover:bg-blue-700';
    }
  }

  get sizeClasses(): string {
    switch (this.size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-6 py-3 text-lg';
      case 'md':
      default:
        return 'px-4 py-2 text-base';
    }
  }
}
