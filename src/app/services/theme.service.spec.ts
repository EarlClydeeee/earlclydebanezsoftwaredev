import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

function mockMatchMedia(prefersLight = false): void {
  spyOn(window, 'matchMedia').and.returnValue({
    matches: prefersLight,
    media: '(prefers-color-scheme: light)',
    addEventListener: jasmine.createSpy('addEventListener'),
    removeEventListener: jasmine.createSpy('removeEventListener'),
  } as unknown as MediaQueryList);
}

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.classList.remove('theme-transition');
    mockMatchMedia(false);

    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.setAttribute('data-theme', 'dark');
    TestBed.resetTestingModule();
  });

  it('should be created', () => {
    const service = TestBed.inject(ThemeService);
    expect(service).toBeTruthy();
  });

  it('should default to dark when no preference is stored', () => {
    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('should toggle between dark and light', () => {
    const service = TestBed.inject(ThemeService);
    expect(service.isDark()).toBe(true);

    service.toggle();
    expect(service.isLight()).toBe(true);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');

    service.toggle();
    expect(service.isDark()).toBe(true);
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });

  it('should restore stored preference on init', () => {
    localStorage.setItem('portfolio-theme', 'light');
    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
