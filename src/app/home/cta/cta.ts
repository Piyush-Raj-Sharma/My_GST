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
          <a href="#" class="bg-[#003f8c] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition duration-300 text-lg flex items-center">
            <span class="text-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></span>
            <span>Schedule a Free Consultation</span>
          </a>
          <a href="#" class="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition duration-300 text-lg flex items-center">
            <span class="text-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span>
            <span>Request a Callback</span>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class CtaComponent {} 