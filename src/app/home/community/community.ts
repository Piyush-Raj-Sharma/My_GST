import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-fuchsia-900 to-sky-800 pb-24 pt-32 text-black md:px-20 lg:pb-16 lg:pt-24">
      <div class="container mx-auto flex grow flex-col items-center justify-between lg:flex-row">
        <div class="mb-12 flex flex-col items-center gap-3 px-6 text-center text-white lg:mb-auto lg:items-start lg:px-0 lg:text-left">
        <h2 class="text-5xl font-bold">MYGST Community</h2>
        <span class="text-2xl">Join India's First GST Community Forum</span>
        <div class="flex"><a href="#" class="mt-4 w-auto rounded-lg border border-yellow-300 bg-yellow-400 px-10 py-2 text-lg font-bold uppercase text-black"> Visit Now! </a></div>
        </div>
        <img alt="MYGST Community: India's First GST Community Forum" src="https://www.mygstrefund.com/img/forum.svg" class="h-72">
        <div class="absolute -top-px left-0 w-full overflow-hidden leading-none"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="h-14 w-full"><path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="fill-white"></path></svg></div>
        <div class="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden leading-none"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="h-14 w-full"><path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="fill-sky-950"></path></svg></div>
      </div>
    </section>
  `,
})
export class CommunityComponent {} 

