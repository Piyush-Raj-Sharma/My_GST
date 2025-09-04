import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="relative rounded-2xl bg-white ring-1 ring-black/5 shadow-sm/5 p-6 sm:p-8">
      <div class="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-blue-50/50 pointer-events-none"></div>
      <div class="flex items-center gap-4">
        <div class="h-14 w-14 rounded-xl bg-white ring-1 ring-black/10 shadow-sm/5 flex items-center justify-center">
          <span class="text-2xl" [ngClass]="accent === 'blue' ? 'text-[#0a4683]' : 'text-orange-500'">{{ icon }}</span>
        </div>
        <h3 class="text-2xl font-semibold text-[#0a4683]">{{ title }}</h3>
      </div>
      <p class="mt-4 text-gray-700 leading-relaxed">{{ description }}</p>
      <ul class="mt-4 space-y-2 text-gray-700">
        <li class="flex items-start gap-2" *ngFor="let p of points">
          <span class="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-300">✓</span>
          <span>{{ p }}</span>
        </li>
      </ul>
      <a href="#" class="mt-6 inline-flex items-center gap-2 text-[#0a4683] font-semibold hover:underline">Learn More <span>→</span></a>
    </article>
  `,
})
export class ModuleCardComponent {
  @Input() icon = '💲';
  @Input() title = '';
  @Input() description = '';
  @Input() points: string[] = [];
  @Input() accent: 'blue' | 'orange' = 'blue';
} 