import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuLink { label: string; href?: string }
interface MenuGroup { title?: string; items: MenuLink[] }
interface MenuSection { label: string; widthClass?: string; groups: MenuGroup[] }

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="w-full bg-white fixed top-0 inset-x-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div class="bg-orange-500 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <span class="text-sm sm:text-base">Calculate your GST Refund instantly!</span>
          <a class="bg-[#0a4683] hover:bg-[#0a4683]/90 text-white text-sm font-semibold px-3 sm:px-4 py-1 rounded-md" href="#">Calculate Now!</a>
        </div>
      </div>

      <div class="border-y border-gray-200 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <a routerLink="/" class="flex items-center gap-2">
              <img src="https://www.mygstrefund.com/img/main-logo.svg" alt="MY GST REFUND" class="h-8 sm:h-9" />
            </a>
          </div>

          <nav class="hidden lg:flex items-center gap-0">
            <a href="/" class="px-5 py-2 border border-gray-200 rounded-l-xl flex items-center gap-2 text-[#0a4683]">
              <span class="text-xl"><svg class="hidden h-6 w-5 self-center lg:block" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m63.28 24.46-10.28-8.56v-6.9a2 2 0 0 0 -4 0v3.56l-13.16-10.96a6 6 0 0 0 -7.68 0l-27.44 22.86a2 2 0 0 0 2.56 3.08l27.44-22.87a2 2 0 0 1 2.56 0l22.72 18.93v34.4a2 2 0 0 1 -2 2h-10v-22a6 6 0 0 0 -6-6h-12a6 6 0 0 0 -6 6v22h-10a2 2 0 0 1 -2-2v-24a2 2 0 0 0 -4 0v24a6 6 0 0 0 6 6h44a6 6 0 0 0 6-6v-31.06l.72.6a2 2 0 0 0 1.28.46 2 2 0 0 0 1.28-3.54zm-39.28 35.54v-22a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v22z"></path><circle cx="30" cy="48" r="2"></circle></svg></span>
            </a>

            <ng-container *ngFor="let m of menus; let i = index">
              <div class="relative" (mouseenter)="openIndex(i, true)" (mouseleave)="openIndex(i, false)">
                <button class="px-6 py-2 border border-gray-200 flex items-center gap-2 text-gray-800" [ngClass]="i === menus.length - 1 ? 'rounded-r-xl' : ''">
                  <span class="font-semibold tracking-wide">{{ m.label }}</span>
                  <span class="text-gray-500">▾</span>
                </button>
                <div *ngIf="isOpenIndex(i)" class="absolute left-0 mt-1 bg-[#f7fafc] shadow-lg rounded border border-gray-200 p-5 z-40" [ngClass]="m.widthClass || 'w-[420px]'">
                  <ng-container *ngFor="let g of m.groups; let gi = index">
                    <div *ngIf="g.title" class="text-[#0b2340] font-bold" [ngClass]="gi > 0 ? 'pt-2' : ''">{{ g.title }}</div>
                    <ul class="space-y-4 text-[#0b2340]">
                      <li *ngFor="let item of g.items"><a [href]="item.href || '#'" class="block font-semibold">{{ item.label }}</a></li>
                    </ul>
                  </ng-container>
                </div>
              </div>
            </ng-container>
          </nav>

          <div class="hidden lg:flex items-center">
            <a href="#" class="px-5 py-2 rounded-l-md bg-orange-500 text-white font-semibold">LOGIN</a>
            <a href="#" class="px-5 py-2 rounded-r-md bg-[#0a4683] text-white font-semibold">TRY IT FOR FREE</a>
          </div>

          <button class="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200" (click)="toggleMobile()">
            <span class="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0a4683]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      <div *ngIf="mobileOpen()" class="lg:hidden border-t border-gray-200 bg-white">
        <div class="px-4 py-3 space-y-1">
          <a routerLink="/" class="block px-3 py-3 rounded-md text-gray-800 font-semibold hover:bg-gray-50">Home</a>
          <ng-container *ngFor="let m of menus">
            <div>
              <div class="px-3 py-2 text-gray-800 font-semibold">{{ m.label }}</div>
              <ng-container *ngFor="let g of m.groups">
                <div *ngIf="g.title" class="px-3 pt-2 text-xs font-bold text-gray-500 uppercase">{{ g.title }}</div>
                <a *ngFor="let item of g.items" [href]="item.href || '#'" class="block px-5 py-2 text-gray-700 hover:bg-gray-50">{{ item.label }}</a>
              </ng-container>
            </div>
          </ng-container>
          <div class="pt-2 flex gap-2">
            <a href="#" class="flex-1 px-4 py-3 rounded-md bg-orange-500 text-white font-semibold text-center">Login</a>
            <a href="#" class="flex-1 px-4 py-3 rounded-md bg-[#0a4683] text-white font-semibold text-center">Try it for free</a>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  menus: MenuSection[] = [
    {
      label: 'ABOUT',
      groups: [
        { items: [
          { label: 'ABOUT US' },
          { label: 'CAREERS' },
          { label: 'CASE STUDIES' },
          { label: 'GET IN TOUCH' },
        ]},
      ],
    },
    {
      label: 'SOLUTIONS',
      widthClass: 'w-[520px]',
      groups: [
        { title: 'GST SERVICES', items: [
          { label: 'GST REGISTRATION' },
          { label: 'EXPORT REFUND' },
          { label: 'GST TCS REFUND' },
          { label: 'INVERTED DUTY & OTHERS' },
          { label: 'GENERATE BRC' },
        ] },
        { title: 'FINANCE', items: [
          { label: 'EXPORT FINANCE' },
        ] },
      ],
    },
    {
      label: 'RESOURCES',
      groups: [
        { items: [
          { label: 'BLOG' },
          { label: 'NEWS' },
          { label: 'COMMUNITY FORUM' },
          { label: 'GST REFUND & ITS RELATED ISSUES' },
          { label: 'LEARNING VIDEOS' },
        ] },
      ],
    },
    {
      label: 'CALCULATOR',
      groups: [
        { items: [
          { label: 'REFUND CALCULATOR' },
          { label: 'GST CUSTOM REFUND' },
          { label: 'KNOW YOUR GST REFUND' },
        ] },
      ],
    },
    {
      label: 'TOOLS',
      groups: [
        { items: [
          { label: 'GSTIN STATUS VALIDATOR' },
          { label: 'CHECK EXPORT-FINANCE ELIGIBILITY' },
          { label: 'HSN & SAC CODE FINDER' },
        ] },
      ],
    },
  ];

  private openMap = new Map<number, boolean>();
  mobileOpen = signal(false);

  openIndex(i: number, state: boolean) { this.openMap.set(i, state); }
  isOpenIndex(i: number) { return !!this.openMap.get(i); }
  toggleMobile() { this.mobileOpen.update(v => !v); }

  @HostListener('window:scroll') onScroll() {
    this.openMap.clear();
  }
} 