import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Step {
  title: string;
  description: string;
  svgIcon: string;
  accent: 'blue' | 'orange';
}

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-[#f7fafc] py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">Your Refund Journey</h2>
          <p class="mt-2 text-gray-600 text-lg">Three simple steps to get your GST refund</p>
        </div>

        <div class="flex flex-col lg:flex-row items-center justify-between gap-10">
          <ng-container *ngFor="let s of steps; let i = index">
            <div class="text-center">
              <div class="mx-auto h-20 w-20 rounded-full flex items-center justify-center"
                   [ngClass]="s.accent === 'blue' ? 'bg-[#003f8c]' : 'bg-orange-500'">
                <span class="inline-block" [innerHTML]="safeSvgs[i]"></span>
              </div>
              <h3 class="mt-6 text-2xl font-semibold text-gray-800">{{ s.title }}</h3>
              <p class="mt-3 text-gray-600 leading-relaxed max-w-sm mx-auto">{{ s.description }}</p>
            </div>

            <div *ngIf="i < steps.length - 1" class="hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" [ngClass]="steps[i].accent === 'blue' ? 'text-[#003f8c]' : 'text-orange-500'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </ng-container>
        </div>
      </div>
    </section>
  `,
})
export class JourneyComponent {
  constructor(private sanitizer: DomSanitizer) {
    this.safeSvgs = this.steps.map(s => this.sanitizer.bypassSecurityTrustHtml(s.svgIcon));
  }

  protected safeSvgs: SafeHtml[] = [];

  protected readonly steps: Step[] = [
    {
      title: 'Calculate',
      description: 'Our AI system calculates your eligible refund amount instantly',
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
      accent: 'blue',
    },
    {
      title: 'File',
      description: 'Automated filing with all compliance checks built-in',
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
      accent: 'orange',
    },
    {
      title: 'Get Your GST Refund',
      description: 'Receive your refund directly in your bank account',
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      accent: 'blue',
    },
  ];
} 