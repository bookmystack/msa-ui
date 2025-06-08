import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  // Navigation scroll state
  isScrolled = false;
  // Mobile menu state
  isMobileMenuOpen = false;
  
  @Output() scrollStatusChange = new EventEmitter<boolean>();
  @Output() MobileMenuOpenChange = new EventEmitter<boolean>();

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
    this.scrollStatusChange.emit(this.isScrolled); // Emit the scroll status
  }

  // Toggle mobile menu
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.MobileMenuOpenChange.emit(this.isMobileMenuOpen); // Emit the scroll status
  }
}
