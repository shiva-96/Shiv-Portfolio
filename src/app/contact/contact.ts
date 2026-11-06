import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
  tooltip: string;
}

@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactTitle = signal("Let's Connect");
  contactSubtitle = signal(
    "I'm always open to exploring new career opportunities, collaborating on interesting projects, and taking on meaningful technical challenges. I'm passionate about building scalable applications, solving complex problems, and continuously learning new technologies.\n If you're looking for a dedicated Software Engineer who values clean code, teamwork, and delivering impactful solutions, I'd love to connect and discuss potential opportunities.\nFeel free to reach out. I'd be happy to hear from you!"
  );
  contactLinks = signal<ContactLink[]>([
    {
      icon: 'email',
      label: 'Email',
      value: 'prasadshiv1998@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=prasadshiv1998%40gmail.com',
      tooltip: 'Click to send an email',
    },
    {
      icon: 'code',
      label: 'GitHub',
      value: 'github.com/shiva-96',
      href: 'https://github.com/shiva-96?tab=repositories',
      tooltip: 'Click to view GitHub profile',
    },
    {
      icon: 'person',
      label: 'LinkedIn',
      value: 'linkedin.com/in/shiv-prasad-69ab571a6',
      href: 'https://www.linkedin.com/in/shiv-prasad-69ab571a6/',
      tooltip: 'Click to view LinkedIn profile',
    },
  ]);

  openLink(href: string) {
    window.open(href, '_blank');
  }
}
