import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepCardComponent } from './step-card';

type Accent = 'blue' | 'orange';
interface Step { number: number; title: string; description: string; accent: Accent }

@Component({
  selector: 'app-how',
  standalone: true,
  imports: [CommonModule, StepCardComponent],
  template: `
    <section class="bg-white py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">How It Works</h2>
          <p class="mt-2 text-gray-600 text-lg">Simple steps to get your GST refund</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col space-y-8">
            <app-step-card
              *ngFor="let s of steps"
              [number]="s.number"
              [title]="s.title"
              [description]="s.description"
              [accent]="s.accent"
            />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HowItWorksComponent {
  protected readonly steps: Step[] = [
    { number: 1, title: 'Enter your details', description: 'Fill in your basic information—it takes less than 1 minute to get started', accent: 'blue' },
    { number: 2, title: 'AI-based eligibility check', description: 'Our system instantly analyzes your eligibility and provides feedback', accent: 'orange' },
    { number: 3, title: 'Automated filing with compliance checks', description: 'Our system handles the entire filing process with built-in compliance verification', accent: 'blue' },
    { number: 4, title: 'Track your claim in real time', description: 'Monitor the progress of your refund through your personalized dashboard', accent: 'orange' },
    { number: 5, title: 'Get your refund', description: 'Receive your GST refund directly in your bank account, fast and worry-free', accent: 'blue' },
  ];
} 