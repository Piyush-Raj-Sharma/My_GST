import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionCardComponent, SolutionPoint } from './solution-card';

interface SolutionItem {
  title: string;
  description: string;
  points: SolutionPoint[];
  ctaText: string;
  icon: string;
  borderColor: string;
  btnColor: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, SolutionCardComponent],
  template: `
    <section class="bg-white pt-2 sm:pt-6 pb-12 sm:pb-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            [icon]="s.icon"
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
      icon: '💲',
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
      icon: '📄',
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
      icon: '📋',
      borderColor: 'bg-[#0a4683]',
      btnColor: 'bg-[#0a4683] hover:bg-[#093a6d]'
    }
  ];
} 