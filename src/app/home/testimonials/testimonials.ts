import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialCardComponent } from './testimonial-card';

interface Testimonial { name: string; roleLocation: string; quote: string; rating: number; starColor?: string }

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TestimonialCardComponent],
  template: `
    <section class="bg-[#f7fafc] py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
          <p class="mt-2 text-gray-600 text-lg">Trusted by businesses across India</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <app-testimonial-card
            *ngFor="let t of testimonials; let i = index"
            [name]="t.name"
            [roleLocation]="t.roleLocation"
            [quote]="t.quote"
            [rating]="t.rating"
            [starColor]="t.starColor || (i === 1 ? '#0a4683' : '#f97316')"
          />
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  protected readonly testimonials: Testimonial[] = [
    {
      name: 'Rajesh Kumar',
      roleLocation: 'Manufacturing, Delhi',
      quote: 'The automation is incredible. We received our GST refund in just 3 weeks, compared to 6 months previously. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      roleLocation: 'Export Business, Mumbai',
      quote: 'As an exporter, GST refunds are critical for our cash flow. This platform has simplified everything and saved us countless hours of paperwork.',
      rating: 5,
      starColor: '#0a4683',
    },
    {
      name: 'Vikram Singh',
      roleLocation: 'Services, Bangalore',
      quote: "The 'No Success, No Fees' policy gave us confidence to try the service. We ended up getting a refund that was 15% higher than we expected!",
      rating: 5,
    },
  ];
} 