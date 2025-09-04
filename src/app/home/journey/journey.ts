import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  title: string;
  description: string;
  icon: string;
  accent: 'blue' | 'orange';
}

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-[#f7fafc] py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-[#0a4683]">Your Refund Journey</h2>
          <p class="mt-2 text-gray-600 text-lg">Three simple steps to get your GST refund</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <ng-container *ngFor="let s of steps; let i = index">
            <div class="text-center">
              <div [ngClass]="s.accent === 'blue' ? 'bg-[#0a4683]' : 'bg-orange-500'"
                   class="mx-auto h-20 w-20 rounded-full flex items-center justify-center text-white text-3xl">
                {{ s.icon }}
              </div>
              <h3 class="mt-6 text-2xl font-semibold text-[#0a4683]">{{ s.title }}</h3>
              <p class="mt-3 text-gray-600 leading-relaxed max-w-sm mx-auto">{{ s.description }}</p>
            </div>
          </ng-container>
        </div>
      </div>
    </section>
  `,
})
export class JourneyComponent {
  protected readonly steps: Step[] = [
    {
      title: 'Calculate',
      description: 'Our AI system calculates your eligible refund amount instantly',
      icon: '🧮',
      accent: 'blue',
    },
    {
      title: 'File',
      description: 'Automated filing with all compliance checks built-in',
      icon: '📄',
      accent: 'orange',
    },
    {
      title: 'Get Your GST Refund',
      description: 'Receive your refund directly in your bank account',
      icon: '💰',
      accent: 'blue',
    },
  ];
} 