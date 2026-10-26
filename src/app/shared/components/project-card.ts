import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface Project {
  icon: string;
  title: string;
  description: string;
  badge: string;
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
