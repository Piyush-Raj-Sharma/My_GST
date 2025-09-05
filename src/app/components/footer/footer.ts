import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-[#0b3345] text-white pt-6 pb-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div class="lg:col-span-7 space-y-8">
            <div>
              <h3 class="text-3xl sm:text-4xl font-extrabold">MYGST Refund</h3>
              <p class="text-white/80 mt-1">GST REFUND SERVICE CONSULTANTS</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 class="font-semibold tracking-wide">HEADQUARTERS</h4>
                <p class="text-white/80 mt-2">DesqWorx, Block E, South City I, Near NH8,<br/>Sector 41, Gurugram, Haryana, India</p>
              </div>
              <div>
                <h4 class="font-semibold tracking-wide">NEW DELHI OFFICE</h4>
                <p class="text-white/80 mt-2">40, Hanuman Lane, Hanuman Road Area,<br/>Connaught Place, New Delhi</p>
              </div>
            </div>

            <div class="border-t border-white/20 pt-6">
              <h4 class="font-semibold tracking-wide">MUMBAI OFFICE</h4>
              <p class="text-white/80 mt-2">My GST Refund, 10th Floor, RCity Offices, Lal Bahadur Shastri Marg, adjoining RCity Mall, Ghatkopar West</p>
              <div class="mt-6 space-y-2">
                <p class="flex items-center gap-3 text-xl"><span>📞</span> +91 92050-05072</p>
                <p class="flex items-center gap-3 text-xl"><span>✉️</span> info@mygstrefund.com</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h4 class="text-2xl font-extrabold mb-4">QUICK LINKS</h4>
              <ul class="space-y-3 text-white/90">
                <li><a href="#" class="hover:underline">About Us</a></li>
                <li><a href="#" class="hover:underline">Careers</a></li>
                <li><a href="#" class="hover:underline">Case Studies</a></li>
                <li><a href="#" class="hover:underline">Partners</a></li>
                <li><a href="#" class="hover:underline">Export Refund</a></li>
                <li><a href="#" class="hover:underline">GST TCS Refund</a></li>
                <li><a href="#" class="hover:underline">Inverted Duty & Others</a></li>
                <li><a href="#" class="hover:underline">GST Notices & Technical Replies</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-2xl font-extrabold mb-4">RESOURCES</h4>
              <ul class="space-y-3 text-white/90">
                <li><a href="#" class="hover:underline">Blog</a></li>
                <li><a href="#" class="hover:underline">News</a></li>
                <li><a href="#" class="hover:underline">Community Forum</a></li>
                <li><a href="#" class="hover:underline">Refund Calculator</a></li>
                <li><a href="#" class="hover:underline">Privacy Policy</a></li>
                <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  `,
})
export class FooterComponent {} 