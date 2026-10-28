import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerLinks = [
    { label: 'GitHub', href: 'https://github.com/yourprofile' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
    { label: 'Twitter', href: 'https://twitter.com/yourprofile' },
  ];

  openLink(href: string) {
    window.open(href, '_blank');
  }
}
