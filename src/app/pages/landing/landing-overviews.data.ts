export type OverviewType =
  | 'education'
  | 'projects'
  | 'experience'
  | 'stack'
  | 'certifications'
  | 'recommendations'
  | 'affiliations';

interface OverviewBase {
  type: OverviewType;
  label: string;
  path: string;
  index: string;
}

export interface EducationOverview extends OverviewBase {
  type: 'education';
  startYear: string;
  endYear: string;
  school: string;
  degreeLine: string;
  honor: string;
}

export interface ProjectsOverview extends OverviewBase {
  type: 'projects';
  items: { icon: string; name: string; badge: string }[];
}

export interface ExperienceOverview extends OverviewBase {
  type: 'experience';
  items: { icon: string; role: string; org: string; period: string }[];
}

export interface StackOverview extends OverviewBase {
  type: 'stack';
  groups: { label: string; tags: string[] }[];
}

export interface CertificationsOverview extends OverviewBase {
  type: 'certifications';
  items: { icon: string; title: string; issuer: string }[];
}

export interface RecommendationsOverview extends OverviewBase {
  type: 'recommendations';
  quote: string;
  author: string;
  initials: string;
}

export interface AffiliationsOverview extends OverviewBase {
  type: 'affiliations';
  items: { badge: string; org: string; role: string }[];
}

export type LandingOverview =
  | EducationOverview
  | ProjectsOverview
  | ExperienceOverview
  | StackOverview
  | CertificationsOverview
  | RecommendationsOverview
  | AffiliationsOverview;

export const LANDING_OVERVIEWS: LandingOverview[] = [
  {
    type: 'education',
    label: 'Education',
    path: '/education',
    index: '01',
    startYear: '2023',
    endYear: '2027',
    school: 'Polytechnic University of the Philippines',
    degreeLine: 'BS Computer Engineering · AI & ML · Sta. Mesa',
    honor: 'President Lister · 5 Scholarships',
  },
  {
    type: 'projects',
    label: 'Projects',
    path: '/projects',
    index: '02',
    items: [
      { icon: 'Dr', name: 'Drowzi', badge: '1ST PLACE' },
      { icon: 'PT', name: 'PaperTradeX', badge: 'LIVE' },
      { icon: 'Hv', name: 'Helmivo', badge: 'ESP32' },
    ],
  },
  {
    type: 'experience',
    label: 'Experience',
    path: '/experience',
    index: '03',
    items: [
      { icon: 'HE', role: 'Front-End Lead', org: 'Hayakawa Electronics', period: '2025' },
      { icon: 'AC', role: 'Development Team', org: 'AWS Cloud Club – PUP', period: '2023 –' },
    ],
  },
  {
    type: 'stack',
    label: 'Stack',
    path: '/stack',
    index: '04',
    groups: [
      { label: 'Languages', tags: ['TypeScript', 'Python', 'SQL'] },
      { label: 'Frontend', tags: ['React', 'Next.js', 'Angular'] },
    ],
  },
  {
    type: 'certifications',
    label: 'Certifications',
    path: '/certifications',
    index: '05',
    items: [
      { icon: 'DC', title: 'AI Engineer Associate', issuer: 'DATACAMP' },
      { icon: 'Ci', title: 'CCNA Essentials', issuer: 'CISCO' },
    ],
  },
  {
    type: 'recommendations',
    label: 'Recommendations',
    path: '/recommendations',
    index: '06',
    quote:
      'Earl consistently delivers production-ready code under tight deadlines — his work cut reporting time dramatically.',
    author: 'Maria Santos',
    initials: 'MS',
  },
  {
    type: 'affiliations',
    label: 'Affiliations',
    path: '/affiliations',
    index: '07',
    items: [
      { badge: 'ACCESS', org: 'ACCESS – PUP', role: 'Lead Senior Dev' },
      { badge: 'GDG', org: 'GDG on Campus – PUP', role: 'ML Cadet' },
      { badge: 'AWS', org: 'AWS Cloud Club', role: 'Development Team' },
    ],
  },
];
