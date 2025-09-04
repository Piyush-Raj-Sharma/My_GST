import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-[#0b3345]">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative -translate-y-1/6 sm:-translate-y-1/5 z-20">
          <div class="rounded-2xl bg-[#a69428]/90 backdrop-blur-sm ring-1 ring-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-4 sm:p-5 lg:p-6">
            <h3 class="text-white text-xl sm:text-2xl font-bold text-center">SUBSCRIBE OUR NEWSLETTER</h3>

            <form class="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
              <input type="text" placeholder="Your name *" class="lg:col-span-5 w-full rounded-xl bg-white/95 text-gray-900 placeholder-gray-400 px-4 py-2 ring-1 ring-black/10 focus:outline-none" />
              <input type="email" placeholder="Your Email Address *" class="lg:col-span-5 w-full rounded-xl bg-white/95 text-gray-900 placeholder-gray-400 px-4 py-2 ring-1 ring-black/10 focus:outline-none" />
              <button type="button" class="lg:col-span-2 w-full rounded-xl bg-yellow-400 px-5 py-2 text-[#0a4683] font-bold text-base sm:text-lg shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:bg-yellow-300">SIGN UP</button>
            </form>

            <p class="mt-3 text-white/90 text-xs sm:text-sm text-center">
              By clicking the sign up button, you agree to recieve communication from us via email. No spam, promise. We will not share your email address with any third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class NewsletterComponent {} 