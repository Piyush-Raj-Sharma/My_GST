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
import { NewsletterComponent } from './newsletter/newsletter';
import { FooterComponent } from '../components/footer/footer';
import { HeaderComponent } from '../components/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    TrustStripComponent,
    SolutionsComponent,
    JourneyComponent,
    GuaranteeComponent,
    WhyChooseComponent,
    ClientsComponent,
    HowItWorksComponent,
    TestimonialsComponent,
    ModulesComponent,
    CommunityComponent,
    NewsletterComponent,
    CtaComponent,
    FaqComponent,
    FooterComponent,
  ],
  templateUrl: './home.html',
})
export class Home {}