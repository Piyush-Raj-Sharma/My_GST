import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-[#f7fafc] py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#" class="inline-flex items-center gap-3 rounded-xl bg-[#0a4683] px-6 sm:px-8 py-4 text-white text-lg font-semibold shadow-[0_10px_25px_rgba(10,70,131,0.25)] hover:bg-[#093a6d]">
            <span class="text-xl">📅</span>
            <span>Schedule a Free Consultation</span>
          </a>
          <a href="#" class="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 sm:px-8 py-4 text-white text-lg font-semibold shadow-[0_10px_25px_rgba(255,136,0,0.25)] hover:bg-orange-600">
            <span class="text-xl">📞</span>
            <span>Request a Callback</span>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class CtaComponent {} 