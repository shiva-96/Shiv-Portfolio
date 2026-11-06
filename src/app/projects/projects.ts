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
        'A web application enabling spatial data analysis, map intersection calculations, and real-time geospatial visualization for defense research.',
      badge: 'Full Stack',
      technologies: ['Angular', 'Node.js', 'Chart.js', 'PostgreSQL', 'GeoJSON', 'OpenLayer'],
    },
    {
      icon: '✈️',
      title: 'Heli Bhumi Platform',
      description:
        'Redesigned and improved the UI/UX of the platform for better intuitiveness, with seamless backend integration and performance improvements.',
      badge: 'UI/UX',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Bootstrap'],
    },
    {
      icon: '📑',
      title: 'Enterprise Billing & Management System',
      description:
        'An enterprise billing platform designed to streamline end-to-end billing operations through configurable workflows, dynamic forms, and automated business processes. Contributed to the development of billing modules, including Billing Process and DMR, dynamic form configurations, configurable dropdowns and validations, and user role-based access management. Developed and enhanced REST APIs for dynamic form updates and JSON-based data comparison, implemented editable and customizable grid features, optimized database queries, and resolved 40+ critical bugs to improve application performance, reliability, and overall user experience.',
      badge: 'Full Stack',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Angular Material', 'TypeScript', 'GDL'],
    },
    {
      icon: '☁️',
      title: 'MuleSoft to NestJS Migration & AWS Integration',
      description:
        'Migrated legacy MuleSoft interfaces to NestJS using AWS services including SNS, SQS, Lambda, and DynamoDB. Developed scalable REST APIs and event-driven workflows, optimized legacy business logic, and implemented token caching to reduce repeated API calls. Improved reliability through automated testing, structured logging, and enhanced error handling while coordinating with clients and cross-functional teams for a smooth production rollout.',
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
            duration: 350000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'eligibility-snackbar',
          });
        }
      });
  }
}
