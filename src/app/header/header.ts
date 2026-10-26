import { Component, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { headerLinks } from '../constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true
})
export class Header {
  headerLinks = headerLinks;
  private router = inject(Router);
  navLinks = [
    { label: 'About', value: 'about' },
    { label: 'Skills', value: 'skills' },
    { label: 'Experience', value: 'experience' },
    { label: 'Projects', value: 'projects' },
    { label: 'Contact', value: 'contact' }
  ];
  activeLink = signal('about');

  handleNavigationClicks(link: string) {
    this.activeLink.set(link.toLowerCase());
    this.router.navigate([link.toLowerCase()]);
  }

  downloadResume() {
    // Add resume download logic here
    console.log('Download resume');
  }
}
