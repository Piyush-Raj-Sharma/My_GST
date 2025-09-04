import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from './feature-card';

type Accent = 'blue' | 'orange';
interface WhyItem { icon: string; title: string; description: string; accent: Accent }

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  template: `
    <section class="bg-[#f7fafc] py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-[#0a4683]">Why Choose Us</h2>
          <p class="mt-2 text-gray-600 text-lg">The most trusted GST refund platform in India</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <app-feature-card
            *ngFor="let f of features"
            [icon]="f.icon"
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
  protected readonly features: WhyItem[] = [
    {
      icon: '🛡️',
      title: 'Full Automation',
      description: 'Only platform with complete automation for GST refund filing from start to finish',
      accent: 'blue',
    },
    {
      icon: '⚡',
      title: 'Zero Manual Intervention',
      description: 'Seamless processing without any paperwork or manual steps',
      accent: 'orange',
    },
    {
      icon: '⏱️',
      title: 'Lightning-Fast',
      description: 'Instant eligibility checks and refund estimates in minutes, not days',
      accent: 'blue',
    },
    {
      icon: '👥',
      title: 'Trusted by 5000+ Businesses',
      description: 'Serving businesses of all sizes across India',
      accent: 'orange',
    },
    {
      icon: '👨‍💼',
      title: 'Dedicated Expert Support',
      description: 'Personal assistance from GST specialists for every client',
      accent: 'blue',
    },
    {
      icon: '✅',
      title: '100% Compliance',
      description: 'All filings are fully compliant with latest GST regulations',
      accent: 'orange',
    },
  ];
} 