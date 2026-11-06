import { Component, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { headerLinks } from '../constant';
import { Router } from '@angular/router';
import { DownloadPdfService } from '../download-pdf-service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly router = inject(Router);
  private readonly downloadPdfService = inject(DownloadPdfService);

  headerLinks = signal(headerLinks);
  activeLink = signal('');
  navLinks = signal([
    { label: 'Home', value: 'hero' },
    { label: 'About', value: 'about' },
    { label: 'Skills', value: 'skills' },
    { label: 'Experience', value: 'experience' },
    { label: 'Projects', value: 'projects' },
    { label: 'Contact', value: 'contact' },
  ]);

  setActiveLink(section: string) {
    this.activeLink.set(section);
    void this.router.navigate([], { fragment: section });
  }

  downloadResume() {
    this.downloadPdfService.downloadResume();
  }

  ngAfterViewInit() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeLink.set(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sections.forEach(section => observer.observe(section));
  }
}
