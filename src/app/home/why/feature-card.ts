import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300  min-h-[200px] flex flex-col gap-2">
      <div class="h-12 w-12 rounded-full flex items-center justify-center text-white"
           [ngClass]="accent === 'blue' ? 'bg-[#0a4683]' : 'bg-orange-500'">
        <ng-container *ngIf="safeSvgIcon">
          <span class="inline-block" [innerHTML]="safeSvgIcon"></span>
        </ng-container>
      </div>

        <h4 class="text-xl font-semibold text-gray-800">{{ title }}</h4>
        <p class="text-gray-600 leading-relaxed">{{ description }}</p>

    </article>
  `,
})
export class FeatureCardComponent {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() title = '';
  @Input() description = '';
  @Input() accent: 'blue' | 'orange' = 'blue';

  protected safeSvgIcon: SafeHtml | null = null;
  @Input() set svgIcon(value: string | undefined) {
    this.safeSvgIcon = value && value.length
      ? this.sanitizer.bypassSecurityTrustHtml(value)
      : null;
  }
} 