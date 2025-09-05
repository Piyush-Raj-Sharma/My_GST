import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="bg-white rounded-lg p-6 shadow-md shadow-sm/5 p-6 sm:p-8 min-h-[300px]">
      <div class="flex items-center gap-4">
        <div class="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
          <span class="text-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></span>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-gray-800">{{ name }}</h4>
          <p class="text-gray-500 text-sm">{{ roleLocation }}</p>
        </div>
      </div>
      <p class="mt-4 text-gray-700 leading-relaxed">“{{ quote }}”</p>
      <div class="mt-5 flex gap-1" [style.color]="starColor">
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
  @Input() starColor: string = '#f97316';

  get starsArray() {
    return Array.from({ length: this.rating });
  }
} 