import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact.scss',
})
export class ContactComponent {
  contactTitle = "Let's Get in Touch";
  contactSubtitle =
    "Have a project in mind or just want to chat? I'd love to hear from you. Feel free to reach out through any of these channels.";

  contactLinks: ContactLink[] = [
    {
      icon: 'email',
      label: 'Email',
      value: 'shiv@example.com',
      href: 'mailto:shiv@example.com',
    },
    {
      icon: 'language',
      label: 'Website',
      value: 'www.yourportfolio.com',
      href: 'https://yourportfolio.com',
    },
    {
      icon: 'code',
      label: 'GitHub',
      value: 'github.com/yourprofile',
      href: 'https://github.com/yourprofile',
    },
    {
      icon: 'person',
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
    },
  ];

  openLink(href: string) {
    window.open(href, '_blank');
  }
}
