import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-xl bg-white ring-1 ring-black/5 shadow-sm/5 p-5 sm:p-6 flex items-start gap-4 sm:gap-6">
      <div class="h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
           [ngClass]="accent === 'blue' ? 'bg-[#0a4683]' : 'bg-orange-500'">
        {{ number }}
      </div>
      <div>
        <h4 class="text-xl sm:text-2xl font-semibold text-[#0a4683]">{{ title }}</h4>
        <p class="mt-2 text-gray-600 leading-relaxed">{{ description }}</p>
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