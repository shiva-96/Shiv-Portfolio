import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  aboutTitle = signal('About Me');
  aboutDescription = signal(
    "Full-Stack Software Engineer with 4.5+ years of experience building scalable REST APIs, event-driven systems and enterprise web applications using NestJS, Node.js, Express.js, Angular and AWS (Lambda, SQS, SNS, DynamoDB, EventBridge, API Gateway). Experienced in migrating legacy integrations to serverless architecture, designing message-driven workflows and delivering zero-downtime production releases. Also delivered a geospatial web application for DRDO-Chandigarh across frontend and backend. Strong focus on clean architecture, performance, reliability and cross-team collaboration."
  );
  highlights = signal([
    'Building scalable web applications',
    'Creating responsive and accessible UIs',
    'Writing clean, maintainable code',
    'Collaborating with cross-functional teams',
  ]);
}
