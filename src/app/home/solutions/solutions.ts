import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionCardComponent, SolutionPoint } from './solution-card';

interface SolutionItem {
  title: string;
  description: string;
  points: SolutionPoint[];
  ctaText: string;
  borderColor: string;
  btnColor: string;
  svgIcon: string;
  bulletIcon: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, SolutionCardComponent],
  template: `
    <section class="bg-white pt-10 sm:pt-6 pb-12 sm:pb-16">
      <div class="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-[#0a4683]">Our GST Solutions</h2>
          <p class="mt-2 text-gray-600 text-lg">Comprehensive GST solutions for your business</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <app-solution-card
            *ngFor="let s of solutions"
            [title]="s.title"
            [description]="s.description"
            [points]="s.points"
            [ctaText]="s.ctaText"
            [svgIcon]="s.svgIcon"
            [bulletIcon]="s.bulletIcon"
            [borderColor]="s.borderColor"
            [btnColor]="s.btnColor"
          />
        </div>
      </div>
    </section>
  `,
})
export class SolutionsComponent {
  protected readonly solutions: SolutionItem[] = [
    {
      title: 'GST Refund',
      description: 'Automated GST refund processing with 100% accuracy and faster processing times.',
      points: [
        { text: 'Automated eligibility check' },
        { text: 'Zero paperwork process' },
        { text: 'Real-time tracking' },
      ],
      ctaText: 'Get Started',
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#003f8c]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      bulletIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#0a4683]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>',
      borderColor: 'bg-[#0a4683]',
      btnColor: 'bg-[#0a4683] hover:bg-[#093a6d]'
    },
    {
      title: 'GST Returns',
      description: 'Simplified GST return filing with automated data validation and error correction.',
      points: [
        { text: 'GSTR-1, GSTR-3B filing' },
        { text: 'Automated data validation' },
        { text: 'Compliance monitoring' },
      ],
      ctaText: 'Learn More',
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
      bulletIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>',
      borderColor: 'bg-orange-500',
      btnColor: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      title: 'GST Reconciliation',
      description: 'Intelligent reconciliation of purchase and sales data with GSTN portal.',
      points: [
        { text: '2A/2B reconciliation' },
        { text: 'Mismatch identification' },
        { text: 'ITC optimization' },
      ],
      ctaText: 'Learn More',
      svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#003f8c]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>',
      bulletIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#0a4683]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>',
      borderColor: 'bg-[#0a4683]',
      btnColor: 'bg-[#0a4683] hover:bg-[#093a6d]'
    }
  ];
} 