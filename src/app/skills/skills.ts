import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent, Skill } from '../shared/components/skill-card';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class Skills {
  skills: Skill[] = [
    {
      icon: '⚛️',
      name: 'Frontend',
      proficiency: 'Expert',
      tags: ['Angular', 'React', 'TypeScript', 'RxJS'],
    },
    {
      icon: '🔧',
      name: 'Backend',
      proficiency: 'Advanced',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: '🎨',
      name: 'UI/UX',
      proficiency: 'Advanced',
      tags: ['Material Design', 'Figma', 'Responsive', 'CSS'],
    },
    {
      icon: '🚀',
      name: 'DevOps',
      proficiency: 'Intermediate',
      tags: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions'],
    },
  ];
}
