import { Component, input } from '@angular/core';

export interface Skill {
  icon: string;
  name: string;
  tags: string[];
}

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss',
})
export class SkillCardComponent {
  skill = input.required<Skill>();
}
