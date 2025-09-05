import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleCardComponent } from './module-card';

interface ModuleItem { title: string; description: string; points: string[]; accent: 'blue' | 'orange'; svgIcon?: string; borderClass?: string; bubbleBgClass?: string }

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [CommonModule, ModuleCardComponent],
  template: `
    <section class="bg-white py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">Comprehensive GST Modules</h2>
          <p class="mt-2 text-gray-600 text-lg">Our integrated platform offers specialized modules to handle every aspect of your GST compliance needs</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <app-module-card
            *ngFor="let m of modules; let i = index"
            [svgIcon]="m.svgIcon"
            [title]="m.title"
            [description]="m.description"
            [points]="m.points"
            [accent]="m.accent"
            [borderClass]="m.borderClass || (i === 1 ? 'border-orange-200' : 'border-blue-200')"
            [bubbleBgClass]="m.bubbleBgClass || (i === 1 ? 'bg-orange-200' : 'bg-blue-200')"
          />
        </div>
      </div>
    </section>
  `,
})
export class ModulesComponent {
  protected readonly modules: ModuleItem[] = [
    {
      svgIcon: '<svg class="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      title: 'Refund Module',
      description: 'Streamline your GST refund process with automated calculations, tracking, and status updates.',
      points: ['Know Your GST Refund', 'Calculate Your GST Refund'],
      accent: 'orange',
    },
    {
      svgIcon: '<svg class="w-10 h-10 text-[#003f8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
      title: 'Returns Module',
      description: 'Simplify your GST return filing with automated data extraction and validation.',
      points: ['GSTR-1 Generation', 'GSTR-3B Support', 'Statement 3 Generation'],
      accent: 'blue',
      borderClass: 'border-orange-200',
      bubbleBgClass: 'bg-orange-200',
    },
    {
      svgIcon: '<svg class="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>',
      title: 'Reconciliation Module',
      description: 'Match and reconcile your GST data across multiple sources with AI-powered accuracy.',
      points: ['IMS vs PR', 'GSTR-2B vs PR', 'GSTR-2B vs GSTR-3B'],
      accent: 'blue',
    },
  ];
} 