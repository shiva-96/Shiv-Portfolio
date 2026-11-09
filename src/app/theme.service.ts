import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

type Theme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'shiv-portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly browserWindow = this.document.defaultView;
  readonly theme = signal<Theme>(this.readTheme());

  constructor() {
    this.applyTheme(this.theme());
  }

  toggleTheme(): void {
    const nextTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.browserWindow?.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    this.applyTheme(nextTheme);
    this.theme.set(nextTheme);
  }

  private readTheme(): Theme {
    if (this.browserWindow?.localStorage.getItem(THEME_STORAGE_KEY)){
      return this.browserWindow?.localStorage.getItem(THEME_STORAGE_KEY) === 'light'
        ? 'light'
        : 'dark';
    }
    return 'light';
  }

  private applyTheme(theme: Theme): void {
    this.document.documentElement.setAttribute('data-theme', theme);
    this.document.documentElement.style.colorScheme = theme;
  }
}
