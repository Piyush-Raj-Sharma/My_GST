import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export type SolutionPoint = { text: string };

@Component({
  selector: 'app-solution-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="service-card bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
      <div class="h-3 w-full" [ngClass]="borderColor"></div>
      <div class="p-5 sm:p-6 flex flex-col gap-4 flex-1">
        <div class="mx-auto h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center text-[#0a4683]" [ngClass]="circleColor">
          <span class="inline-block" [innerHTML]="safeSvgIcon"></span>
        </div>
        <h3 class="text-xl font-semibold text-[#0a4683] text-center">{{ title }}</h3>
        <p class="text-center text-gray-600 leading-relaxed">{{ description }}</p>
        <ul class="mt-1 space-y-2 text-gray-700">
          <li class="flex items-start gap-2" *ngFor="let p of points">
            <span class="inline-block" [innerHTML]="safeBulletIcon"></span>
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
  constructor(private sanitizer: DomSanitizer) {}

  protected safeSvgIcon: SafeHtml | null = null;
  @Input() set svgIcon(value: string) {
    this.safeSvgIcon = value ? this.sanitizer.bypassSecurityTrustHtml(value) : '';
  }
  protected safeBulletIcon: SafeHtml | null = null;
  @Input() set bulletIcon(value: string) {
    this.safeBulletIcon = value ? this.sanitizer.bypassSecurityTrustHtml(value) : '';
  }

  @Input() title = '';
  @Input() description = '';
  @Input() points: SolutionPoint[] = [];
  @Input() ctaText = 'Learn More';
  @Input() borderColor = 'bg-[#0a4683]';
  @Input() circleColor = 'bg-blue-100';
  @Input() btnColor = 'bg-[#0a4683] hover:bg-[#093a6d]';
} 