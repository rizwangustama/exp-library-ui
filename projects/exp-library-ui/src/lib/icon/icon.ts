import { Component, Input } from '@angular/core';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

@Component({
  selector: 'exp-icon',
  imports: [],
  template: `<i class="ti" [class]="'ti-' + name + ' ' + sizeClass"></i>`,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `
})
export class ExpIcon {
  @Input() name: string = '';
  @Input() size: IconSize | string = 'md';

  get sizeClass(): string {
    const sizeMap: Record<string, string> = {
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl'
    };
    // If it's a known size, return the mapped tailwind class. 
    // Otherwise, return the string as-is (allowing custom tailwind classes like 'text-[40px]')
    return sizeMap[this.size] || this.size;
  }
}
