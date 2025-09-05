import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section class="relative bg-sky-950 pt-72 lg:pt-36">
  <div class="absolute -top-0 z-10 -mt-56 w-full px-5 lg:-mt-20">
    <div class="container relative mx-auto flex flex-col items-center justify-center gap-5 rounded-xl border border-[#534615] bg-gradient-to-tl from-[#ab8e2a] to-[#9d9e28] px-8 py-4 text-white lg:h-44">
      
      <h3 class="text-center text-2xl uppercase">
        Subscribe Our Newsletter
      </h3>

      <form class="formkit-form w-full flex flex-col gap-2 items-center" id="newsletter" name="form_1">
        <div class="flex w-full flex-col gap-6 lg:flex-row">
          <div class="grid grid-cols-1 gap-6 lg:w-5/6 lg:grid-cols-2">
            <div class="formkit-outer">
              <div class="formkit-wrapper w-full">
                <div class="formkit-inner w-full bg-white flex items-center ring-1 ring-gray-400 focus-within:ring-yellow-400 focus-within:ring-2 rounded mb-1">
                  <input
                    placeholder="Your name *"
                    class="formkit-input appearance-none bg-white w-full p-3 text-base text-gray-700 placeholder-gray-400 rounded focus:outline-none focus:ring-0"
                    type="text"
                    name="name"
                    id="input_0"
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
            <div class="formkit-outer">
              <div class="formkit-wrapper w-full">
                <div class="formkit-inner w-full bg-white flex items-center ring-1 ring-gray-400 focus-within:ring-yellow-400 focus-within:ring-2 rounded mb-1">
                  <input
                    placeholder="Your Email Address *"
                    class="formkit-input appearance-none bg-white w-full p-3 text-base text-gray-700 placeholder-gray-400 rounded focus:outline-none focus:ring-0"
                    type="email"
                    name="email"
                    id="input_1"
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            id="newsletterSubmit"
            class="mb-1 rounded-lg border border-yellow-300 bg-yellow-400 py-2 font-bold uppercase text-black lg:w-1/6 lg:py-0"
          >
            Sign Up
          </button>
        </div>
        <div class="flex w-full flex-col justify-center gap-6 lg:flex-row">
          <span class="text-sm italic text-white">
            By clicking the sign up button, you agree to receive communication from us via email.
            No spam, promise. We will not share your email address with any third parties.
          </span>
        </div>
      </form>
    </div>
  </div>
</section>

  `,
})
export class NewsletterComponent {} 