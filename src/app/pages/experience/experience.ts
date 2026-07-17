import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { EXPERIENCE_YEAR_GROUPS } from './experience.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly yearGroups = EXPERIENCE_YEAR_GROUPS;
  protected readonly activeEntryId = signal<string | null>(null);

  private observer: IntersectionObserver | null = null;
  private readonly visibleRatios = new Map<string, number>();

  constructor() {
    afterNextRender(() => this.initScrollSpy());
  }

  protected isActive(entryId: string): boolean {
    return this.activeEntryId() === entryId;
  }

  protected isYearActive(year: number): boolean {
    const activeId = this.activeEntryId();
    if (!activeId) {
      return false;
    }

    return this.yearGroups.some(
      (group) =>
        group.year === year && group.entries.some((entry) => entry.id === activeId),
    );
  }

  private initScrollSpy(): void {
    const scrollRoot = this.host.nativeElement.closest('.main-content');
    const roleElements = this.host.nativeElement.querySelectorAll('[data-role-entry]');

    if (!roleElements.length) {
      return;
    }

    const firstId = roleElements[0].getAttribute('data-role-entry');
    if (firstId) {
      this.activeEntryId.set(firstId);
    }

    this.observer = new IntersectionObserver(
      (entries) => this.updateActiveEntry(entries),
      {
        root: scrollRoot,
        rootMargin: '-38% 0px -38% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    );

    roleElements.forEach((element: Element) => this.observer?.observe(element));

    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  private updateActiveEntry(entries: IntersectionObserverEntry[]): void {
    for (const entry of entries) {
      const entryId = entry.target.getAttribute('data-role-entry');
      if (!entryId) {
        continue;
      }

      if (entry.isIntersecting) {
        this.visibleRatios.set(entryId, entry.intersectionRatio);
      } else {
        this.visibleRatios.delete(entryId);
      }
    }

    if (this.visibleRatios.size === 0) {
      return;
    }

    const [bestId] = [...this.visibleRatios.entries()].sort(([, a], [, b]) => b - a)[0];
    this.activeEntryId.set(bestId);
  }
}
