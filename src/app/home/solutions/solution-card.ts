import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SolutionPoint = { text: string };

@Component({
  selector: 'app-solution-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="relative rounded-xl bg-white ring-1 ring-black/5 shadow-sm/5 flex flex-col h-full overflow-hidden">
      <div class="h-3 w-full" [ngClass]="borderColor"></div>
      <div class="p-5 sm:p-6 flex flex-col gap-4 flex-1">
        <div class="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0a4683]">
          <span class="text-xl">{{ icon }}</span>
        </div>
        <h3 class="text-xl font-semibold text-[#0a4683] text-center">{{ title }}</h3>
        <p class="text-center text-gray-600 leading-relaxed">{{ description }}</p>
        <ul class="mt-1 space-y-2 text-gray-700">
          <li class="flex items-start gap-2" *ngFor="let p of points">
            <span class="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.94a.75.75 0 1 0-1.06-1.06l-3.97 3.97-1.53-1.53a.75.75 0 1 0-1.06 1.06l2.06 2.06a.75.75 0 0 0 1.06 0l4.5-4.5Z" clip-rule="evenodd"/></svg>
            </span>
            <span>{{ p.text }}</span>
          </li>
        </ul>
        <div class="mt-auto pt-3">
          <button class="mx-auto block rounded-lg px-5 py-2 font-semibold text-white"
                  [ngClass]="btnColor">
            {{ ctaText }}
          </button>
        </div>
      </div>
    </article>
  `,
})
export class SolutionCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() points: SolutionPoint[] = [];
  @Input() ctaText = 'Learn More';
  @Input() icon = '💼';
  @Input() borderColor = 'bg-[#0a4683]';
  @Input() btnColor = 'bg-[#0a4683] hover:bg-[#093a6d]';
} 