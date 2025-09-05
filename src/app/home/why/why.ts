import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from './feature-card';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

type Accent = 'blue' | 'orange';
interface WhyItem {title: string; description: string; accent: Accent; svgIcon?: string }

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  template: `
    <section class="bg-[#f7fafc] py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center text-center gap-4 mb-12">
          <div>
            <span class="inline-block" [innerHTML]="safeHeaderSvg"></span>
          </div>
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-[#0a4683]">{{ headerTitle }}</h2>
          </div>
          <div>
            <p class="text-gray-600 text-lg">{{ headerSubtitle }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          <app-feature-card
            *ngFor="let f of features"
            [svgIcon]="f.svgIcon"
            [title]="f.title"
            [description]="f.description"
            [accent]="f.accent"
          />
        </div>
      </div>
    </section>
  `,
})
export class WhyChooseComponent {
  constructor(private sanitizer: DomSanitizer) {}

  protected safeHeaderSvg: SafeHtml | null = null;
  @Input() set headerSvg(value: string) {
    this.safeHeaderSvg = value ? this.sanitizer.bypassSecurityTrustHtml(value) : '';
  }
  @Input() headerTitle = 'Why Choose Us';
  @Input() headerSubtitle = 'The most trusted GST refund platform in India';

  protected readonly features: WhyItem[] = [
    {
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
      title: 'Full Automation',
      description: 'Only platform with complete automation for GST refund filing from start to finish',
      accent: 'blue',
    },
    {
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
      title: 'Zero Manual Intervention',
      description: 'Seamless processing without any paperwork or manual steps',
      accent: 'orange',
    },
    {
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      title: 'Lightning-Fast',
      description: 'Instant eligibility checks and refund estimates in minutes, not days',
      accent: 'blue',
    },
    {
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
      title: 'Trusted by 5000+ Businesses',
      description: 'Serving businesses of all sizes across India',
      accent: 'orange',
    },
    {
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>',
      title: 'Dedicated Expert Support',
      description: 'Personal assistance from GST specialists for every client',
      accent: 'blue',
    },
    {
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      title: '100% Compliance',
      description: 'All filings are fully compliant with latest GST regulations',
      accent: 'orange',
    },
  ];
} 