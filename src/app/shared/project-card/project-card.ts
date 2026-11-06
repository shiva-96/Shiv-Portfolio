import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface ProjectInterface {
  icon: string;
  title: string;
  description: string;
  badge: string;
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-project-card',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCardComponent {
  project = input.required<ProjectInterface>();

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
