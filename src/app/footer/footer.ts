import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = signal(new Date().getFullYear());

  footerLinks = signal([
    { label: 'GitHub', href: 'https://github.com/yourprofile' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
    { label: 'Twitter', href: 'https://twitter.com/yourprofile' },
  ]);

  openLink(href: string) {
    window.open(href, '_blank');
  }
}
