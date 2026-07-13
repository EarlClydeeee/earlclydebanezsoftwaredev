import { Component, signal } from '@angular/core';
import { HARDWARE_PROJECTS, SOFTWARE_PROJECTS, type ProjectEntry } from './projects.data';

export type ProjectFilter = 'all' | 'software' | 'hardware';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly softwareProjects = SOFTWARE_PROJECTS;
  protected readonly hardwareProjects = HARDWARE_PROJECTS;
  protected readonly softwareCount = SOFTWARE_PROJECTS.length;
  protected readonly hardwareCount = HARDWARE_PROJECTS.length;
  protected readonly totalCount = SOFTWARE_PROJECTS.length + HARDWARE_PROJECTS.length;

  protected readonly activeFilter = signal<ProjectFilter>('all');

  protected setFilter(filter: ProjectFilter): void {
    this.activeFilter.set(filter);
  }

  protected showSoftware(): boolean {
    const filter = this.activeFilter();
    return filter === 'all' || filter === 'software';
  }

  protected showHardware(): boolean {
    const filter = this.activeFilter();
    return filter === 'all' || filter === 'hardware';
  }

  protected hasDocumentation(project: ProjectEntry): boolean {
    return Boolean(
      project.objectives?.length ||
        project.scope ||
        project.limitations?.length ||
        project.significance,
    );
  }

  protected formatIndex(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
