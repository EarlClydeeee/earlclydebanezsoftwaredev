export interface SectionConfig {
  label: string;
  path: string;
  shortcut: string;
  icon: string;
  index: string;
  subtitle: string;
  description: string;
}

export const PORTFOLIO_SECTIONS: SectionConfig[] = [
  {
    label: 'Education',
    path: '/education',
    shortcut: '1',
    icon: 'education',
    index: '01',
    subtitle: 'Academic background and continuous learning.',
    description:
      'Degrees, coursework, and formal training that shaped my foundation in software development.',
  },
  {
    label: 'Projects',
    path: '/projects',
    shortcut: '2',
    icon: 'folder',
    index: '02',
    subtitle: 'Selected work across web, mobile, and systems.',
    description:
      'A curated collection of applications, experiments, and shipped products I have built.',
  },
  {
    label: 'Experience',
    path: '/experience',
    shortcut: '3',
    icon: 'experience',
    index: '03',
    subtitle: 'Roles, teams, and professional milestones.',
    description:
      'Where I have worked, what I contributed, and the impact of each engagement.',
  },
  {
    label: 'Stack',
    path: '/stack',
    shortcut: '4',
    icon: 'stack',
    index: '04',
    subtitle: 'Languages, frameworks, and tools I use daily.',
    description:
      'The technologies I reach for when designing, building, and shipping software.',
  },
  {
    label: 'Certifications',
    path: '/certifications',
    shortcut: '5',
    icon: 'certifications',
    index: '05',
    subtitle: 'Verified credentials and completed programs.',
    description:
      'Industry certifications and structured programs that validate my technical skills.',
  },
  {
    label: 'Recommendations',
    path: '/recommendations',
    shortcut: '6',
    icon: 'recommendations',
    index: '06',
    subtitle: 'What colleagues and clients say about working with me.',
    description:
      'Testimonials and endorsements from people I have collaborated with professionally.',
  },
  {
    label: 'Affiliations',
    path: '/affiliations',
    shortcut: '7',
    icon: 'affiliations',
    index: '07',
    subtitle: 'Communities, organizations, and memberships.',
    description:
      'Groups and institutions I am part of — from open source to professional networks.',
  },
];
