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
import { ThemeService } from '../theme.service';
import { ActiveSectionService } from '../active-section.service';

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
  readonly themeService = inject(ThemeService);
  private readonly activeSectionService = inject(ActiveSectionService);

  isViewMobileTab = signal(window.innerWidth <= 768);
  headerLinks = signal(headerLinks);
  activeLink = this.activeSectionService.activeSection;
  mobileMenuOpen = signal(false);
  navLinks = signal([
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Skills', value: 'skills' },
    { label: 'Experience', value: 'experience' },
    { label: 'Projects', value: 'projects' },
    { label: 'Contact', value: 'contact' },
  ]);

  setActiveLink(section: string) {
    this.activeSectionService.setActiveSection(section);
    this.mobileMenuOpen.set(false);
    void this.router.navigate([], { fragment: section });
  }

  downloadResume() {
    this.downloadPdfService.downloadResume();
  }

}
