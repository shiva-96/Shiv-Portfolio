import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { DownloadPdfService } from '../download-pdf-service';
import { CalculateExpericeService } from '../calculate-experice-service';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly router = inject(Router);
  private readonly downloadPdfService = inject(DownloadPdfService);
  private readonly calExpService = inject(CalculateExpericeService);

  totalExp = signal('0');
  heroTitle = signal('Engineering');
  heroHighlight = signal('reliable');
  heroSubtitle = signal('digital products.');
  heroImage = signal('assets/images/professional-avatar.svg');
  description = computed(() => {
    return `I'm a full-stack software engineer with ${this.totalExp()}+ years of experience building clear, dependable web applications—from Angular interfaces to Node.js services on AWS.`;
  });
  stats = computed(() => {
    return [
      { number: `${this.totalExp()}+`, label: 'Years Experience' },
      { number: '5+', label: 'Projects Completed' },
      { number: '10+', label: 'Happy Clients' },
    ];
  });

  ngOnInit() {
    this.totalExp.set(this.calExpService.calculateTotalExp());
  }

  navigateToContact() {
    void this.router.navigate([], { fragment: 'contact' });
  }

  downloadResume(): void {
    this.downloadPdfService.downloadResume();
  }
}
