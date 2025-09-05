import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-md p-6">
      <div class="md:w-1/4 flex justify-center mb-4 md:mb-0">
        <div class="h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
          [ngClass]="accent === 'blue' ? 'bg-[#0a4683]' : 'bg-orange-500'">
          {{ number }}
        </div>
      </div>

    <div class="md:w-3/4 md:pl-6 text-center md:text-left">
      <h4 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h4>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </div>

  `,
})
export class StepCardComponent {
  @Input() number = 1;
  @Input() title = '';
  @Input() description = '';
  @Input() accent: 'blue' | 'orange' = 'blue';
} 