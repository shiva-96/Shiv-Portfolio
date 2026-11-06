import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { DownloadPdfService } from '../download-pdf-service';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly router = inject(Router);
  private readonly downloadPdfService = inject(DownloadPdfService);

  heroTitle = signal('Building');
  heroHighlight = signal('scalable');
  heroSubtitle = signal('web apps.');
  heroImage = signal('assets/images/My-Image.jpeg');
  description = signal(
    "Software Engineer with 2.5+ years crafting enterprise-grade web applications. Specializing in Angular frontends, Node.js/NestJS backends, and AWS deployments."
  );
  stats = signal([
    { number: '4.5+', label: 'Years Experience' },
    { number: '5+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
  ]);

  navigateToContact() {
    void this.router.navigate([], { fragment: 'contact' });
  }

  downloadResume(): void {
    this.downloadPdfService.downloadResume();
  }
}
