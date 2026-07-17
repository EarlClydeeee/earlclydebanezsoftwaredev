import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PORTFOLIO_SECTIONS } from '../../config/sections';
import { ThemeService } from '../../services/theme.service';

interface NavItem {
  label: string;
  shortcut?: string;
  icon: string;
  route?: string;
  routeExact?: boolean;
  href?: string;
  external?: boolean;
  disabled?: boolean;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  protected readonly theme = inject(ThemeService);

  protected readonly profile = {
    name: 'Earl Clyde Banez',
    title: 'Software Developer',
    initials: 'EB',
  };

  protected readonly sections: NavSection[] = [
    {
      items: PORTFOLIO_SECTIONS.map(({ label, path, shortcut, icon }) => ({
        label,
        shortcut,
        icon,
        route: path,
      })),
    },
    {
      title: 'Resources',
      items: [
        { label: 'Feed', shortcut: '8', icon: 'grid', route: '/', routeExact: true },
        { label: 'Thoughts', shortcut: '9', icon: 'thoughts', disabled: true },
      ],
    },
    {
      title: 'Connect',
      items: [
        {
          label: 'Email',
          shortcut: 'E',
          icon: 'email',
          href: 'mailto:earlclyde.mbanez@gmail.com',
        },
        {
          label: 'LinkedIn',
          shortcut: '↗',
          icon: 'linkedin',
          href: 'https://www.linkedin.com/in/earl-clyde-ba%C3%B1ez/',
          external: true,
        },
        {
          label: 'GitHub',
          shortcut: '↗',
          icon: 'github',
          href: 'https://github.com/EarlClydeeee',
          external: true,
        },
      ],
    },
  ];
}
