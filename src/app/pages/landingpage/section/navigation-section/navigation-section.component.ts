import { Component, OnInit, signal } from '@angular/core';
import { INavigationOption } from '../../../../models/interfaces/section/navigation-option';

@Component({
  selector: 'app-navigation-section',
  standalone: true,
  imports: [],
  templateUrl: './navigation-section.component.html',
  styleUrl: './navigation-section.component.css'
})

export class NavigationSectionComponent implements OnInit {
  private _isMenuOpen = signal(false);

  get isMenuOpen() {
    return this._isMenuOpen();
  }

  navOptions: INavigationOption[] = [
    { href: '#home', displayText: 'Home' },
    { href: '#about', displayText: 'About' },
    { href: '#services', displayText: 'Services' },
    { href: '#projects', displayText: 'Projects' },
    { href: '#blog', displayText: 'Blog' },
    { href: '#contact', displayText: 'Contact' },
  ];

  private onScroll = () => {
    if (this._isMenuOpen()) {
      this._isMenuOpen.set(false);
    }
  };

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
  
  onMobileMenuClick() {
    this._isMenuOpen.update(val => !val);
  }

  setMenuOpen(newValue: boolean)
  {
    this._isMenuOpen.update(val => val = newValue);
  }
}

