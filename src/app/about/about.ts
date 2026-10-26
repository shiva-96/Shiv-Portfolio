import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true
})
export class About {
  aboutTitle = 'About Me';
  aboutDescription = 'I\'m a passionate full-stack developer based in India with a keen interest in building beautiful, functional, and user-centric applications. With 3+ years of professional experience, I specialize in modern JavaScript frameworks and have a strong foundation in backend technologies.';

  highlights = [
    'Building scalable web applications',
    'Creating responsive and accessible UIs',
    'Writing clean, maintainable code',
    'Collaborating with cross-functional teams'
  ];
}
