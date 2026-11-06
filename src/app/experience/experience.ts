import { Component, signal } from '@angular/core';

export interface ExperienceStructure {
  date: string;
  company: string;
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
      role: 'Software Engineer 2',
      description:
        'Leading development of enterprise-scale Angular applications. Mentoring junior developers and establishing best practices for the team.',
      technologies: ['Nestjs', 'TypeScript', 'AWS'],
    },
    {
      date: '6 Sep 2023 - 8 Aug 2025',
      company: 'Infozech Software Pvt Ltd',
      role: 'Software Engineer',
      description:
        'Worked on developing and maintaining web applications using Angular and Node.js. Implemented RESTful APIs and integrated with MongoDB for data storage. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'GDL'],
    },
    {
      date: '2 May 2022 - 5 Sep 2023',
      company: 'Simultaneous Geographical Reality Labs',
      role: 'Full Stack Developer',
      description:
        "Contributed to a geospatial web application for DRDO-Chandigarh, working across frontend and backend. Implemented Node.js REST APIs and backend services for geospatial data access and processing. Enhanced the map UI using OpenLayers and developed geospatial analysis features (e.g., intersection counts between rays). Collaborated with designers and stakeholders to convert domain requirements into reliable features.Performed testing, debugging, and performance tuning to ensure accuracy of geospatial outputs",
      technologies: ['Angular', 'Nodejs', 'Expressjs', 'Typescript', 'OpenLayers', 'PostgreSQL'],
    },
  ]);
}
