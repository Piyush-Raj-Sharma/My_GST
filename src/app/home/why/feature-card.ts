import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="rounded-xl bg-white ring-1 ring-black/5 shadow-sm/5 p-6 sm:p-8 flex gap-5">
      <div class="h-12 w-12 rounded-full flex items-center justify-center text-white"
           [ngClass]="accent === 'blue' ? 'bg-[#0a4683]' : 'bg-orange-500'">
        <span class="text-xl">{{ icon }}</span>
      </div>
      <div>
        <h4 class="text-xl font-semibold text-[#0a4683]">{{ title }}</h4>
        <p class="mt-2 text-gray-600 leading-relaxed">{{ description }}</p>
      </div>
    </article>
  `,
})
export class FeatureCardComponent {
  @Input() icon = '✔️';
  @Input() title = '';
  @Input() description = '';
  @Input() accent: 'blue' | 'orange' = 'blue';
} 