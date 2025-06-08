import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [],
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.css'
})
export class StatsSectionComponent {
  stats = {
    projectsCompleted: 500,
    co2Reduced: 2.5,
    energySaved: 35,
    treesPlanted: 250
  };
}
