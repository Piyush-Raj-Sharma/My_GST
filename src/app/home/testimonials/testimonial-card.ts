import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="rounded-xl bg-white ring-1 ring-black/5 shadow-sm/5 p-6 sm:p-8">
      <div class="flex items-center gap-4">
        <div class="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
          <span class="text-xl">👤</span>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-[#0a4683]">{{ name }}</h4>
          <p class="text-gray-500 text-sm">{{ roleLocation }}</p>
        </div>
      </div>
      <p class="mt-4 text-gray-700 leading-relaxed">“{{ quote }}”</p>
      <div class="mt-5 flex gap-1 text-orange-500">
        <ng-container *ngFor="let _ of starsArray">★</ng-container>
      </div>
    </article>
  `,
})
export class TestimonialCardComponent {
  @Input() name = '';
  @Input() roleLocation = '';
  @Input() quote = '';
  @Input() rating = 5;

  get starsArray() {
    return Array.from({ length: this.rating });
  }
} 