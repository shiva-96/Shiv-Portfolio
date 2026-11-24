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
    return `I'm a Full-Stack Software Engineer with ${this.totalExp()}+ years of experience designing and building scalable, reliable web applications. I enjoy working across the entire development lifecycle, from creating intuitive user experiences to developing backend systems, APIs, and cloud-based solutions. With experience in technologies like Angular, React, Node.js, NestJS, and AWS, I also leverage Generative AI tools to accelerate development, explore solutions, improve code quality, and solve complex engineering challenges. I'm always curious about emerging technologies and focused on building software that is clean, maintainable, and built to last.`
  });
  stats = computed(() => {
    return [
      { number: `${this.totalExp()}+`, label: 'Years Experience' },
      { number: '5+', label: 'Projects Completed' }
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
