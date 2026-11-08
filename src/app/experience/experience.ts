import { Component, signal } from '@angular/core';

export interface ExperienceStructure {
  date: string;
  company: string;
  location: string;
  role: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = signal<ExperienceStructure[]>([
    {
      date: '11 Aug 2025 - Present',
      company: 'Deloitte',
      location: 'Kolkata',
      role: 'Software Engineer 2',
      description:
        'Developing and maintaining enterprise applications across Angular interfaces, NestJS services, and AWS integrations, with a focus on reliable delivery and maintainable code.',
      technologies: ['NestJS', 'TypeScript', 'AWS', 'Angular'],
    },
    {
      date: '6 Sep 2023 - 8 Aug 2025',
      company: 'Infozech Software Pvt Ltd',
      location: 'New Delhi',
      role: 'Software Engineer',
      description:
        'Developed and maintained web applications with Angular and Node.js, building REST APIs and integrating MongoDB. Partnered with cross-functional teams to ship features and support reliable production releases.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'GDL'],
    },
    {
      date: '2 May 2022 - 5 Sep 2023',
      company: 'Simultaneous Geographical Reality Labs',
      location: 'Gurugram',
      role: 'Full Stack Developer',
      description:
        'Built features for a geospatial web application for DRDO-Chandigarh, spanning Node.js APIs, data processing, and an OpenLayers map interface. Delivered spatial analysis tools and tested outputs for accuracy with designers and stakeholders.',
      technologies: ['Angular', 'Node.js', 'Express.js', 'TypeScript', 'OpenLayers', 'PostgreSQL'],
    },
  ]);
}
