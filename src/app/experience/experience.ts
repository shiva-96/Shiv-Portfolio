import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Experience {
  date: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      date: 'Jan 2023 - Present',
      company: 'Deloitte',
      role: 'Senior Frontend Engineer',
      description: 'Leading development of enterprise-scale Angular applications. Mentoring junior developers and establishing best practices for the team.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Material Design']
    },
    {
      date: 'Jun 2021 - Dec 2022',
      company: 'TechStartup Inc',
      role: 'Full Stack Developer',
      description: 'Built responsive web applications using Angular and Node.js. Implemented RESTful APIs and optimized database queries.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express']
    },
    {
      date: 'Mar 2020 - May 2021',
      company: 'WebAgency Pro',
      role: 'Junior Frontend Developer',
      description: 'Developed and maintained client websites using modern web technologies. Collaborated with design team to implement UI/UX designs.',
      technologies: ['React', 'Vue.js', 'HTML/CSS', 'JavaScript']
    }
  ];
}
