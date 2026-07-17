import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { EXPERIENCE_YEAR_GROUPS } from './experience.data';

interface RoleAnchor {
  id: string;
  element: HTMLElement;
  timelineY: number;
  screenY: number;
}

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
  protected readonly entryFocus = signal<Record<string, number>>({});
  protected readonly highlightY = signal(0);
  protected readonly lineFillY = signal(0);

  private scrollRoot: HTMLElement | null = null;
  private timelineEl: HTMLElement | null = null;
  private rafId = 0;
  private scrollStopTimer = 0;
  private scrolling = false;
  private smoothedHighlightY = 0;
  private smoothedLineFillY = 0;
  private targetHighlightY = 0;
  private targetLineFillY = 0;
  private initialized = false;
  private readonly focusWeights = new Map<string, number>();

  constructor() {
    afterNextRender(() => this.initScrollSpy());
  }

  protected focusFor(entryId: string): number {
    return this.entryFocus()[entryId] ?? 0;
  }

  protected isYearActive(year: number): boolean {
    const group = this.yearGroups.find((item) => item.year === year);
    if (!group) {
      return false;
    }

    let groupPeak = 0;
    for (const entry of group.entries) {
      groupPeak = Math.max(groupPeak, this.focusFor(entry.id));
    }

    if (groupPeak < 0.25) {
      return false;
    }

    let globalPeak = 0;
    for (const weight of Object.values(this.entryFocus())) {
      globalPeak = Math.max(globalPeak, weight);
    }

    return groupPeak >= globalPeak - 0.08;
  }

  private initScrollSpy(): void {
    this.scrollRoot =
      (this.host.nativeElement.closest('.main-content') as HTMLElement | null) ??
      (document.querySelector('.main-content') as HTMLElement | null);

    this.timelineEl = this.host.nativeElement.querySelector('.experience-timeline');

    const roleElements = this.host.nativeElement.querySelectorAll('[data-role-entry]');
    if (!roleElements.length || !this.timelineEl) {
      return;
    }

    const onScroll = () => {
      this.scrolling = true;
      window.clearTimeout(this.scrollStopTimer);
      this.scrollStopTimer = window.setTimeout(() => {
        this.scrolling = false;
      }, 120);
      this.scheduleFrame();
    };

    this.scrollRoot?.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    this.scheduleFrame();

    this.destroyRef.onDestroy(() => {
      this.scrollRoot?.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.clearTimeout(this.scrollStopTimer);
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
    });
  }

  private scheduleFrame(): void {
    if (this.rafId) {
      return;
    }

    this.rafId = requestAnimationFrame(() => {
      this.rafId = 0;
      this.updateScrollFocus();

      const highlightDelta = Math.abs(this.smoothedHighlightY - this.targetHighlightY);
      const lineDelta = Math.abs(this.smoothedLineFillY - this.targetLineFillY);

      if (this.scrolling || highlightDelta > 0.4 || lineDelta > 0.4) {
        this.scheduleFrame();
      }
    });
  }

  private updateScrollFocus(): void {
    const scrollRoot =
      this.scrollRoot ??
      (this.host.nativeElement.closest('.main-content') as HTMLElement | null) ??
      (document.querySelector('.main-content') as HTMLElement | null);

    const timelineEl =
      this.timelineEl ?? this.host.nativeElement.querySelector('.experience-timeline');

    const roleElements = Array.from(
      this.host.nativeElement.querySelectorAll('[data-role-entry]'),
    ) as HTMLElement[];

    if (!timelineEl || !roleElements.length) {
      return;
    }

    const viewport =
      scrollRoot?.getBoundingClientRect() ??
      ({ top: 0, bottom: window.innerHeight, height: window.innerHeight } as DOMRect);

    const focusY = viewport.top + viewport.height * 0.4;
    const timelineRect = timelineEl.getBoundingClientRect();
    const anchors = this.collectAnchors(roleElements, timelineRect.top);

    if (!anchors.length) {
      return;
    }

    const targetHighlightY = this.interpolateTimelineY(anchors, focusY);
    const targetLineFillY = targetHighlightY + 24;

    this.targetHighlightY = targetHighlightY;
    this.targetLineFillY = targetLineFillY;

    if (!this.initialized) {
      this.smoothedHighlightY = targetHighlightY;
      this.smoothedLineFillY = targetLineFillY;
      this.initialized = true;
    } else {
      this.smoothedHighlightY = this.lerp(this.smoothedHighlightY, targetHighlightY, 0.14);
      this.smoothedLineFillY = this.lerp(this.smoothedLineFillY, targetLineFillY, 0.12);
    }

    this.highlightY.set(this.smoothedHighlightY);
    this.lineFillY.set(this.smoothedLineFillY);

    const falloff = Math.max(180, viewport.height * 0.34);
    let focusChanged = false;

    for (const anchor of anchors) {
      const distance = Math.abs(anchor.screenY - focusY);
      const weight = this.smoothFalloff(distance, falloff);
      const previous = this.focusWeights.get(anchor.id) ?? 0;

      if (Math.abs(previous - weight) > 0.008) {
        this.focusWeights.set(anchor.id, weight);
        focusChanged = true;
      }

      anchor.element.style.setProperty('--focus', weight.toFixed(3));
    }

    if (focusChanged) {
      this.entryFocus.set(Object.fromEntries(this.focusWeights.entries()));
    }
  }

  private collectAnchors(
    roleElements: HTMLElement[],
    timelineTop: number,
  ): RoleAnchor[] {
    return roleElements
      .map((element) => {
        const id = element.getAttribute('data-role-entry');
        const logo = element.querySelector('.role-entry__logo');

        if (!id || !logo) {
          return null;
        }

        const logoRect = logo.getBoundingClientRect();

        return {
          id,
          element,
          timelineY: logoRect.top + logoRect.height / 2 - timelineTop,
          screenY: logoRect.top + logoRect.height / 2,
        };
      })
      .filter((anchor): anchor is RoleAnchor => anchor !== null);
  }

  private interpolateTimelineY(anchors: RoleAnchor[], focusY: number): number {
    if (anchors.length === 1) {
      return anchors[0].timelineY;
    }

    if (focusY <= anchors[0].screenY) {
      return anchors[0].timelineY;
    }

    const last = anchors[anchors.length - 1];
    if (focusY >= last.screenY) {
      return last.timelineY;
    }

    for (let index = 0; index < anchors.length - 1; index += 1) {
      const current = anchors[index];
      const next = anchors[index + 1];

      if (focusY >= current.screenY && focusY <= next.screenY) {
        const range = next.screenY - current.screenY || 1;
        const progress = (focusY - current.screenY) / range;
        return current.timelineY + (next.timelineY - current.timelineY) * progress;
      }
    }

    return last.timelineY;
  }

  private smoothFalloff(distance: number, radius: number): number {
    const t = Math.min(distance / radius, 1);
    return 1 - t * t * (3 - 2 * t);
  }

  private lerp(from: number, to: number, amount: number): number {
    return from + (to - from) * amount;
  }
}
