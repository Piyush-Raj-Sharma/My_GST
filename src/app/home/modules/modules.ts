import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleCardComponent } from './module-card';

interface ModuleItem { icon: string; title: string; description: string; points: string[]; accent: 'blue' | 'orange' }

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [CommonModule, ModuleCardComponent],
  template: `
    <section class="bg-white py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-[#0a4683]">Comprehensive GST Modules</h2>
          <p class="mt-2 text-gray-600 text-lg">Our integrated platform offers specialized modules to handle every aspect of your GST compliance needs</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <app-module-card
            *ngFor="let m of modules"
            [icon]="m.icon"
            [title]="m.title"
            [description]="m.description"
            [points]="m.points"
            [accent]="m.accent"
          />
        </div>
      </div>
    </section>
  `,
})
export class ModulesComponent {
  protected readonly modules: ModuleItem[] = [
    {
      icon: '💲',
      title: 'Refund Module',
      description: 'Streamline your GST refund process with automated calculations, tracking, and status updates.',
      points: ['Know Your GST Refund', 'Calculate Your GST Refund'],
      accent: 'orange',
    },
    {
      icon: '📄',
      title: 'Returns Module',
      description: 'Simplify your GST return filing with automated data extraction and validation.',
      points: ['GSTR-1 Generation', 'GSTR-3B Support', 'Statement 3 Generation'],
      accent: 'blue',
    },
    {
      icon: '📋',
      title: 'Reconciliation Module',
      description: 'Match and reconcile your GST data across multiple sources with AI-powered accuracy.',
      points: ['IMS vs PR', 'GSTR-2B vs PR', 'GSTR-2B vs GSTR-3B'],
      accent: 'blue',
    },
  ];
} 