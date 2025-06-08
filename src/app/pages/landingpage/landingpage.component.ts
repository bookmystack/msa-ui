import { Component, HostListener } from '@angular/core';
import { HeroSectionComponent } from "./section/hero-section/hero-section.component";
import { NavigationSectionComponent } from "./section/navigation-section/navigation-section.component";
import { AboutSectionComponent } from "./section/about-section/about-section.component";
import { ServicesSectionComponent } from "./section/services-section/services-section.component";
import { StatsSectionComponent } from "./section/stats-section/stats-section.component";
import { CtaSectionComponent } from "./section/cta-section/cta-section.component";
import { FooterSectionComponent } from "./section/footer-section/footer-section.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [HeroSectionComponent, NavigationSectionComponent, AboutSectionComponent, ServicesSectionComponent, StatsSectionComponent, CtaSectionComponent, FooterSectionComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
}
