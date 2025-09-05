import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border-b border-gray-200">
      <button (click)="open = !open" class="w-full flex items-center justify-between text-left px-12 sm:px-6 py-2 hover:bg-gray-50">
        <span class="font-semibold text-gray-700 text-lg">{{ index }}. {{ question }}</span>
        <span class="text-gray-500 text-2xl leading-none">{{ open ? '−' : '+' }}</span>
      </button>
      <div *ngIf="open" class="px-4 sm:px-6 pb-4 text-gray-700 leading-relaxed">
        {{ answer }}
      </div>
    </div>
  `,
})
export class FaqItemComponent {
  @Input() index = 1;
  @Input() question = '';
  @Input() answer = '';
  open = false;
} 