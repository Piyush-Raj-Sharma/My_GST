import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ClientLogo { src: string; alt: string }

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-[#f7fafc] py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">Our Clients</h2>
          <p class="mt-2 text-gray-600 text-lg">Trusted by businesses nationwide for reliable, efficient, and lasting partnerships.</p>
        </div>

        <div class="relative overflow-hidden group">
          <div class="flex items-center gap-6 animate-marquee group-hover:[animation-play-state:paused]" style="--duration:35s">
            <ng-container *ngFor="let logo of repeatedLogos">
              <div class="shrink-0 rounded-xl bg-white ring-1 ring-black/5 shadow-sm/5 px-8 py-6">
                <img [src]="logo.src" [alt]="logo.alt" class="h-10 sm:h-12 object-contain" />
              </div>
            </ng-container>
          </div>
        </div>
      </div>

      <style>
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          width: max-content;
          animation: marquee var(--duration) linear infinite;
        }
      </style>
    </section>
  `,
})
export class ClientsComponent {
  private readonly logos: ClientLogo[] = [
    { src: 'https://dummyimage.com/160x48/ffffff/0a4683.png&text=kt', alt: 'KT' },
    { src: 'https://dummyimage.com/200x48/ffffff/cc0000.png&text=MARTINI', alt: 'Martini' },
    { src: 'https://dummyimage.com/220x48/ffffff/0a4683.png&text=Mohan+Mutha', alt: 'Mohan Mutha' },
    { src: 'https://dummyimage.com/240x48/ffffff/0ca37f.png&text=PharmEasy', alt: 'PharmEasy' },
    { src: 'https://dummyimage.com/200x48/ffffff/0a4683.png&text=Client+A', alt: 'Client A' },
    { src: 'https://dummyimage.com/200x48/ffffff/0a4683.png&text=Client+B', alt: 'Client B' },
  ];

  // Duplicate logos to enable seamless loop (50% shift)
  protected readonly repeatedLogos = [...this.logos, ...this.logos];
} 