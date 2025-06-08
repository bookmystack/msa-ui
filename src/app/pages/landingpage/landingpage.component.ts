import { Component, HostListener } from '@angular/core';
import { NavigationComponent } from "./section/navigation/navigation.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  
  // Navigation scroll state
  isScrolled = false;
  
  // Mobile menu state
  isMobileMenuOpen = false;
  
  // Statistics for the stats section
  stats = {
    projectsCompleted: 500,
    co2Reduced: 2.5,
    energySaved: 35,
    treesPlanted: 250
  };
  
  // Animation states
  isStatsVisible = false;
  
  constructor() { }
  
  ngOnInit(): void {
    // Initialize any required data or animations
    this.initializeAnimations();
  }
  
  // Listen for scroll events to change navbar appearance
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
    
    // Check if stats section is visible for counter animation
    this.checkStatsVisibility();
  }
  
  // Toggle mobile menu
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  // Smooth scroll to section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu if open
    this.isMobileMenuOpen = false;
  }
  
  // Initialize page animations
  private initializeAnimations(): void {
    // Add any initial animation setup here
    this.observeElements();
  }
  
  // Check if stats section is visible for counter animation
  private checkStatsVisibility(): void {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      const rect = statsSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible && !this.isStatsVisible) {
        this.isStatsVisible = true;
        this.animateCounters();
      }
    }
  }
  
  // Animate counter numbers
  private animateCounters(): void {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-count') || '0');
      const increment = target / 100;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = this.formatNumber(target);
          clearInterval(timer);
        } else {
          counter.textContent = this.formatNumber(Math.floor(current));
        }
      }, 20);
    });
  }
  
  // Format numbers with appropriate suffix
  private formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  }
  
  // Observe elements for scroll animations
  private observeElements(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));
  }
  
  // Handle contact form submission (if you add a contact form later)
  onContactSubmit(formData: any): void {
    console.log('Contact form submitted:', formData);
    // Handle form submission logic here
  }
  
  // Handle newsletter subscription (if you add it later)
  onNewsletterSubscribe(email: string): void {
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription logic here
  }
  
  // Handle CTA button clicks
  onGetStartedClick(): void {
    // Navigate to signup/contact page or show modal
    console.log('Get Started clicked');
  }
  
  onScheduleConsultationClick(): void {
    // Navigate to booking page or show modal
    console.log('Schedule Consultation clicked');
  }
  
  onWatchVideoClick(): void {
    // Open video modal or navigate to video page
    console.log('Watch Video clicked');
  }
  
  // Handle service link clicks
  onServiceClick(service: string): void {
    console.log('Service clicked:', service);
    // Navigate to specific service page
  }
  
  // Handle social media link clicks
  onSocialClick(platform: string): void {
    const socialLinks = {
      twitter: 'https://twitter.com/econature',
      facebook: 'https://facebook.com/econature',
      linkedin: 'https://linkedin.com/company/econature',
      pinterest: 'https://pinterest.com/econature'
    };
    
    const url = socialLinks[platform as keyof typeof socialLinks];
    if (url) {
      window.open(url, '_blank');
    }
  }
}
