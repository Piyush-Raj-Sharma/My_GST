import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guarantee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl bg-[#0a4683] text-white px-6 sm:px-10 py-8 sm:py-10 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
          <h3 class="text-2xl sm:text-3xl font-bold text-center">No Success, No Fees</h3>
          <p class="mt-3 text-center text-white/90 text-lg">We only charge when you get your refund. That's our guarantee.</p>
        </div>
      </div>
    </section>
  `,
})
export class GuaranteeComponent {} 