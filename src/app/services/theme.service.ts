import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly theme = signal<Theme>('dark');
  readonly isLight = computed(() => this.theme() === 'light');
  readonly isDark = computed(() => this.theme() === 'dark');

  private explicitPreference = false;
  private mediaQuery: MediaQueryList | null = null;
  private mediaHandler: ((e: MediaQueryListEvent) => void) | null = null;

  constructor() {
    const initial = this.readInitial();
    this.explicitPreference = this.hasStoredPreference();
    this.theme.set(initial);

    if (isPlatformBrowser(this.platformId)) {
      this.apply(initial, false);
      this.watchSystemPreference();
    }
  }

  toggle(): void {
    this.set(this.theme() === 'dark' ? 'light' : 'dark', true);
  }

  set(theme: Theme, persist = true): void {
    this.theme.set(theme);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (persist) {
      this.explicitPreference = true;
      localStorage.setItem(STORAGE_KEY, theme);
    }

    this.apply(theme, true);
  }

  private apply(theme: Theme, animate: boolean): void {
    const root = document.documentElement;

    if (animate) {
      root.classList.add('theme-transition');
      window.setTimeout(() => root.classList.remove('theme-transition'), 480);
    }

    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;

    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute('content', theme === 'light' ? '#f4efe8' : '#060504');
  }

  private readInitial(): Theme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'dark';
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    const fromDom = this.readFromDom();
    if (fromDom) {
      return fromDom;
    }

    return this.systemTheme();
  }

  private readFromDom(): Theme | null {
    const fromDom = document.documentElement.getAttribute('data-theme');
    if (fromDom === 'light' || fromDom === 'dark') {
      return fromDom;
    }
    return null;
  }

  private hasStoredPreference(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark';
  }

  private systemTheme(): Theme {
    if (typeof window.matchMedia !== 'function') {
      return 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  private watchSystemPreference(): void {
    if (typeof window.matchMedia !== 'function') {
      return;
    }

    this.mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    this.mediaHandler = (event: MediaQueryListEvent) => {
      if (!this.explicitPreference) {
        this.set(event.matches ? 'light' : 'dark', false);
      }
    };

    this.mediaQuery.addEventListener('change', this.mediaHandler);
  }
}
