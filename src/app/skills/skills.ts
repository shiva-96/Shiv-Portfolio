import { Component, signal } from '@angular/core';
import { SkillCardComponent, Skill } from '../shared/skill-card/skill-card';
import { ActiveSectionDirective } from '../active-section.directive';

@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent, ActiveSectionDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = signal<Skill[]>([
    {
      icon: '{ }',
      name: 'Languages',
      tags: ['JavaScript', 'TypeScript'],
    },
    {
      icon: '⚡',
      name: 'Frontend',
      tags: ['Angular', 'React', 'RxJS', 'HTML', 'CSS', 'SCSS'],
    },
    {
      icon: '🔧',
      name: 'Backend',
      tags: ['Node.js', 'Express', 'NestJS', 'REST APIs'],
    },
    {
      icon: '🗄️',
      name: 'Databases',
      tags: ['PostgreSQL', 'MongoDB'],
    },
    {
      icon: '☁️',
      name: 'DevOps',
      tags: ['AWS', 'GitHub Actions'],
    },
    {
      icon: '🗺',
      name: 'Geospatial',
      tags: ['OpenLayers', 'Geospatial', 'GeoJSON', 'Mapbox'],
    }
  ]);
}
