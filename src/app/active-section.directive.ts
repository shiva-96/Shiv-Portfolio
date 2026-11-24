import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, inject, input, OnInit } from '@angular/core';
import { ActiveSectionService } from './active-section.service';

@Directive({
  selector: '[appActiveSection]',
})
export class ActiveSectionDirective implements OnInit {
  readonly appActiveSection = input.required<string>();

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly activeSectionService = inject(ActiveSectionService);
  private readonly document = inject(DOCUMENT);

  ngOnInit() {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const bounds = this.elementRef.nativeElement.getBoundingClientRect();
    const activationLine = window.innerHeight * 0.25;

    if (bounds.top <= activationLine && bounds.bottom > activationLine) {
      this.activeSectionService.setActiveSection(this.appActiveSection());
    }

    if (
      this.appActiveSection() === 'contact' &&
      window.scrollY + window.innerHeight >=
        this.document.documentElement.scrollHeight - 4
    ) {
      this.activeSectionService.setActiveSection('contact');
    }
  }
}
