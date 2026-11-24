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
        'Working on enterprise application modernization, migrating legacy MuleSoft integrations to NestJS and JSP-based applications to Angular 20. Developing scalable REST APIs and AWS-powered event-driven workflows using Lambda, SNS, SQS, and DynamoDB. Building reusable Angular components, integrating backend services, and implementing reactive state management with Angular Signals. Also developed a common pageId-based routing mechanism for dynamic screen navigation, with a focus on clean code, maintainability, and reliable application delivery.',
      technologies: ['NestJS', 'TypeScript', 'AWS', 'Angular'],
    },
    {
      date: '6 Sep 2023 - 8 Aug 2025',
      company: 'Infozech Software Pvt Ltd',
      location: 'New Delhi',
      role: 'Software Engineer',
      description:
        'Developed and maintained enterprise billing applications, contributing to billing modules, end-to-end bill generation, and DMR processes. Built REST APIs using Node.js and Express.js, along with dynamic, configuration-driven forms and reusable Angular components. Implemented features such as nested JSON comparison, dynamic form updates, editable AG Grid cells, and configurable validations, reducing future development effort by 50%. Resolved 40+ critical production bugs and optimized MongoDB queries to improve application stability and performance. Collaborated with team members to develop reusable solutions and deliver application enhancements.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'GDL'],
    },
    {
      date: '2 May 2022 - 5 Sep 2023',
      company: 'Simultaneous Geographical Reality Labs',
      location: 'Gurugram',
      role: 'Full Stack Developer',
      description:
        'Contributed to the development of a geospatial web application for DRDO-DGRE Chandigarh, working across frontend development and backend services. Developed Node.js REST APIs for geospatial data access and processing while building interactive map-based interfaces using OpenLayers. Implemented geospatial analysis features, including ray intersection detection and intersection-count calculations. Worked closely with designers and stakeholders to translate project requirements into functional features, while focusing on application accuracy, debugging, and performance improvements.',
      technologies: ['Angular', 'Node.js', 'Express.js', 'TypeScript', 'OpenLayers', 'PostgreSQL'],
    },
  ]);
}
