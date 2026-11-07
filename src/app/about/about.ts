import { Component, computed, inject, signal } from '@angular/core';
import { CalculateExpericeService } from '../calculate-experice-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  private readonly calExpService = inject(CalculateExpericeService);

  totalExp = signal(this.calExpService.calculateTotalExp());
  aboutTitle = signal('About Me');
  highlights = signal([
    'Building scalable web applications',
    'Creating responsive and accessible UIs',
    'Writing clean, maintainable code',
    'Collaborating with cross-functional teams',
  ]);

  aboutDescription = computed(()=>{
    return `Full-Stack Software Engineer with ${this.totalExp()}+ years of experience building scalable REST APIs, event-driven systems and enterprise web applications using NestJS, Node.js, Express.js, Angular and AWS (Lambda, SQS, SNS, DynamoDB, EventBridge, API Gateway). Experienced in migrating legacy integrations to serverless architecture, designing message-driven workflows and delivering zero-downtime production releases. Also delivered a geospatial web application for DRDO-Chandigarh across frontend and backend. Strong focus on clean architecture, performance, reliability and cross-team collaboration.`
  });
}
