import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    About,
    Skills,
    Experience,
    Projects,
    Contact,
    Footer,
    MatIcon,
    MatTooltip
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
