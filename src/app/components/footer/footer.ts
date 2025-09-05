import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-sky-950 text-white pt-6">
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
                <p class="flex items-center gap-3 text-xl"><span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 fill-white" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></span> +91 92050-05072</p>
                <p class="flex items-center gap-3 text-xl"><span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 fill-white" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></span> info@mygstrefund.com</p>
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
      <div class="mt-10 bg-black px-4 py-2">
        <div class="max-w-7xl mx-auto flex justify-end text-sm text-white">
          © Copyright 2025 My GST Refund. All rights reserved.
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {} 