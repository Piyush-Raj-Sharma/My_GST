import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqItemComponent } from './faq-item';

interface FaqItem { q: string; a: string }

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FaqItemComponent],
  template: `
    <section class="bg-white py-12 sm:py-16">
      <div class="mx-auto max-w-5xl px-8 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p class="mt-2 text-gray-600 text-lg">Get answers to common questions about GST refunds</p>
        </div>
        <div class="rounded bg-white shadow-lg shadow-sm/5 overflow-hidden">
          <app-faq-item *ngFor="let item of items; let i = index"
                         [index]="i + 1"
                         [question]="item.q"
                         [answer]="item.a" />
        </div>
      </div>
    </section>
  `,
})
export class FaqComponent {
  protected readonly items: FaqItem[] = [
    {
      q: 'Who can get a GST refund?',
      a: "GST refunds are available to businesses that have excess input tax credit, exporters (both goods and services), those who have paid tax on advance receipts but the supply didn't materialize, and in cases of assessment/provisional assessment/appeal/other order. Our platform automatically determines your eligibility based on your business details.",
    },
    { q: 'Is your platform recognized by authorities?', a: 'Yes. We follow the latest GSTN guidelines and our workflows map to official processes.' },
    { q: 'How much does the service cost?', a: 'Simple pricing with a success-based fee. You only pay when you receive the refund.' },
    { q: 'How long does the refund process take?', a: 'Timelines vary by case. With automation, many refunds complete in weeks instead of months.' },
    { q: 'What documents do I need to provide?', a: 'Basic KYC, GST filings, purchase/sales data as applicable. We guide you step-by-step.' },
    { q: 'Do you offer other GST services besides refunds?', a: 'Yes—returns, reconciliation, and compliance support are available.' },
  ];
} 