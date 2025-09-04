import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero';
import { TrustStripComponent } from './trust-strip/trust-strip';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, TrustStripComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {} 