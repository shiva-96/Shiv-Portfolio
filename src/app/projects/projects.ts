import { Component, signal, inject } from '@angular/core';
import { ProjectCardComponent } from '../shared/project-card/project-card';
import { ProjectInterface } from '../shared/project-card/project-card';
import { ValidateUser } from '../shared/validate-user/validate-user';
import { Dialog } from '@angular/cdk/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, MatSnackBarModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly dialog = inject(Dialog);
  private readonly snackBar = inject(MatSnackBar);

  projects = signal<ProjectInterface[]>([
    {
      icon: '🗺',
      title: 'Geospatial Analysis Platform',
      description:
        'Built a full-stack mapping and analysis tool for DRDO-Chandigarh, bringing spatial data, intersection calculations, and interactive visualizations into one workflow.',
      badge: 'Full Stack',
      technologies: ['Angular', 'Node.js', 'Chart.js', 'PostgreSQL', 'GeoJSON', 'OpenLayer'],
    },
    {
      icon: '✈️',
      title: 'Heli Bhumi Platform',
      description:
        'Refined the platform interface and connected frontend flows with backend services, making key journeys clearer and smoother to use.',
      badge: 'UI/UX',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Bootstrap'],
    },
    {
      icon: '📑',
      title: 'Enterprise Billing & Management System',
      description:
        'Contributed billing and DMR workflows for an enterprise platform, including configurable forms, validations, role-based access, and editable data grids. Expanded REST APIs, optimized database queries, and resolved 40+ critical defects to improve reliability and usability.',
      badge: 'Full Stack',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Angular Material', 'TypeScript', 'GDL'],
    },
    {
      icon: '☁️',
      title: 'MuleSoft to NestJS Migration & AWS Integration',
      description:
        'Migrated MuleSoft integrations to NestJS and AWS, building REST APIs and event-driven workflows with SNS, SQS, Lambda, and DynamoDB. Added token caching, automated tests, structured logging, and stronger error handling to support a reliable production rollout.',
      badge: 'Full Stack / Cloud',
      technologies: ['NestJS', 'Node.js', 'AWS Lambda', 'AWS SNS', 'AWS SQS', 'DynamoDB', 'REST APIs'],
    },
  ]);

  addMoreProject() {
    this.dialog
      .open(ValidateUser, {
        width: '420px',
        maxWidth: 'calc(100vw - 32px)',
        panelClass: 'validate-user-dialog',
        backdropClass: 'validate-user-backdrop',
        ariaLabelledBy: 'validation-title',
      })
      .closed.subscribe((result) => {
        if (result === 'ineligible') {
          this.snackBar.open('You are not eligible to access this section.', '×', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'eligibility-snackbar',
          });
        }
      });
  }
}
