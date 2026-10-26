import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  icon: string;
  name: string;
  proficiency: string;
  tags: string[];
}

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss'
})
export class SkillCardComponent {
  @Input() skill!: Skill;
}
