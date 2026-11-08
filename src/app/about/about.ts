import { Component, computed, inject, signal } from '@angular/core';
import { CalculateExpericeService } from '../calculate-experice-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  private readonly calExpService = inject(CalculateExpericeService);

  totalExp = signal(this.calExpService.calculateTotalExp());
  aboutTitle = signal('Building software that makes a difference');
  highlights = signal([
    'Resolved 40+ critical defects in an enterprise billing platform',
    'Modernized legacy integrations with NestJS and AWS',
    'Built geospatial analysis tools for DRDO-Chandigarh',
    'Delivered across Angular, Node.js APIs, and cloud services',
  ]);

  aboutDescription = computed(() => {
    return `I'm a full-stack software engineer with ${this.totalExp()}+ years of experience building Angular applications, Node.js and NestJS APIs, and event-driven systems on AWS. I turn complex business and technical requirements into dependable products: improving an enterprise billing platform by resolving 40+ critical defects, modernizing legacy integrations, and delivering geospatial analysis tools for DRDO-Chandigarh. I care about measurable outcomes, maintainable architecture, and making software simpler to use and support.`;
  });
}
