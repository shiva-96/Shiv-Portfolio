import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../shared/components/project-card';
import { Project } from '../shared/components/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      icon: '💻',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
      badge: 'Full Stack',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe']
    },
    {
      icon: '📱',
      title: 'Mobile Banking App',
      description: 'Cross-platform banking application with secure authentication, transfer functionality, and detailed transaction history.',
      badge: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Native APIs']
    },
    {
      icon: '🎨',
      title: 'Design System',
      description: 'Comprehensive component library and design tokens for consistent UI across multiple projects and teams.',
      badge: 'Design',
      technologies: ['Angular Material', 'Storybook', 'TypeScript', 'SCSS']
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with real-time metrics, custom reports, and predictive analytics capabilities.',
      badge: 'Data Viz',
      technologies: ['Angular', 'D3.js', 'Chart.js', 'WebSockets']
    }
  ];
}
