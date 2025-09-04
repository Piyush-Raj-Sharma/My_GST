import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero';
import { TrustStripComponent } from './trust-strip/trust-strip';
import { SolutionsComponent } from './solutions/solutions';
import { JourneyComponent } from './journey/journey';
import { GuaranteeComponent } from './guarantee/guarantee';
import { WhyChooseComponent } from './why/why';
import { ClientsComponent } from './clients/clients';
import { HowItWorksComponent } from './how/how';
import { TestimonialsComponent } from './testimonials/testimonials';
import { ModulesComponent } from './modules/modules';
import { FaqComponent } from './faq/faq';
import { CtaComponent } from './cta/cta';
import { CommunityComponent } from './community/community';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, TrustStripComponent, SolutionsComponent, JourneyComponent, GuaranteeComponent, WhyChooseComponent, ClientsComponent, HowItWorksComponent, TestimonialsComponent, ModulesComponent, FaqComponent, CtaComponent, CommunityComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}