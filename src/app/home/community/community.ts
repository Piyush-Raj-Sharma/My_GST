import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10 pointer-events-none">
        <div class="absolute -inset-10 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 rotate-[-2deg] lg:rotate-[-3deg]"></div>
      </div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="max-w-3xl">
          <h2 class="text-white text-4xl sm:text-5xl font-extrabold tracking-tight">MYGST Community</h2>
          <p class="mt-4 text-white/90 text-xl">Join India's First GST Community Forum</p>
          <a href="#" class="mt-8 inline-flex items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-[#0a4683] font-extrabold shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:bg-yellow-300">VISIT NOW!</a>
        </div>
      </div>
    </section>
  `,
})
export class CommunityComponent {} 

