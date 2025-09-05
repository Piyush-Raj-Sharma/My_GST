import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-module-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="module-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border relative overflow-hidden min-h-[500px]" [ngClass]="borderClass">
      <div class="absolute top-0 right-0 w-32 h-32 rounded-full opacity-30 -mr-10 -mt-10" [ngClass]="bubbleBgClass"></div>
      <div class="relative">
        <div class="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md module-icon">
          <ng-container *ngIf="safeSvgIcon;">
            <span class="inline-block" [innerHTML]="safeSvgIcon"></span>
          </ng-container>
        </div>
        <h3 class="text-2xl font-bold text-[#003f8c] mb-4">{{ title }}</h3>
      
      <p class="text-gray-600 mb-6 text-lg">{{ description }}</p>
      <ul class="space-y-4 mb-8">
        <li class="flex items-center" *ngFor="let p of points">
          <svg class="w-5 h-5 text-[#003f8c] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span class="text-gray-700">{{ p }}</span>
        </li>
      </ul>
      <a href="#" class="text-[#003f8c] font-medium flex items-center hover:text-[#003f8c]-light transition-colors duration-200">Learn More  <span>→</span></a>
      </div>
    </article>
  `,
})
export class ModuleCardComponent {
  @Input() svgIcon?: string;
  @Input() title = '';
  @Input() description = '';
  @Input() points: string[] = [];
  @Input() accent: 'blue' | 'orange' = 'blue';
  @Input() borderClass: string = 'border-blue-200';
  @Input() bubbleBgClass: string = 'bg-blue-200';

  constructor(private sanitizer: DomSanitizer) {}

  get safeSvgIcon(): SafeHtml | null {
    if (!this.svgIcon) return null;
    return this.sanitizer.bypassSecurityTrustHtml(this.svgIcon);
  }
} 